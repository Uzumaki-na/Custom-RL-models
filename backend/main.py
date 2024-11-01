from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List, Optional
import json
import numpy as np
import pandas as pd
from datetime import datetime
import gymnasium as gym
from stable_baselines3 import DQN, PPO, A2C, DDPG
import os

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Store models and training data in memory (in production, use a database)
models = {}
training_data = {}

@app.post("/api/models/create")
async def create_model(config: Dict):
    model_id = str(len(models) + 1)
    algorithm = config["algorithm"]
    env_type = config["type"]
    
    # Create environment based on type
    if env_type == "game":
        env = gym.make("CartPole-v1")
    elif env_type == "trading":
        # Simplified trading environment
        env = gym.make("CartPole-v1")  # Replace with actual trading env
    else:
        raise HTTPException(status_code=400, detail="Unsupported environment type")
    
    # Initialize model based on algorithm
    if algorithm == "dqn":
        model = DQN("MlpPolicy", env, verbose=1)
    elif algorithm == "ppo":
        model = PPO("MlpPolicy", env, verbose=1)
    elif algorithm == "a2c":
        model = A2C("MlpPolicy", env, verbose=1)
    elif algorithm == "ddpg":
        model = DDPG("MlpPolicy", env, verbose=1)
    else:
        raise HTTPException(status_code=400, detail="Unsupported algorithm")
    
    models[model_id] = {
        "model": model,
        "env": env,
        "config": config,
        "status": "created",
        "created_at": datetime.now().isoformat()
    }
    
    return {"model_id": model_id}

@app.post("/api/models/{model_id}/train")
async def train_model(model_id: str):
    if model_id not in models:
        raise HTTPException(status_code=404, detail="Model not found")
    
    model_data = models[model_id]
    model = model_data["model"]
    config = model_data["config"]
    
    # Start training
    model_data["status"] = "training"
    try:
        model.learn(total_timesteps=config.get("trainingConfig", {}).get("epochs", 1000))
        model_data["status"] = "completed"
        
        # Save training metrics
        training_data[model_id] = {
            "rewards": model.ep_info_buffer,
            "timestamps": [datetime.now().isoformat() for _ in range(len(model.ep_info_buffer))]
        }
        
        return {"status": "success"}
    except Exception as e:
        model_data["status"] = "failed"
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/models/{model_id}/status")
async def get_model_status(model_id: str):
    if model_id not in models:
        raise HTTPException(status_code=404, detail="Model not found")
    
    return {
        "status": models[model_id]["status"],
        "config": models[model_id]["config"],
        "created_at": models[model_id]["created_at"]
    }

@app.get("/api/models/{model_id}/metrics")
async def get_model_metrics(model_id: str):
    if model_id not in training_data:
        raise HTTPException(status_code=404, detail="Training data not found")
    
    return training_data[model_id]

@app.get("/api/models")
async def list_models():
    return {
        model_id: {
            "status": data["status"],
            "config": data["config"],
            "created_at": data["created_at"]
        }
        for model_id, data in models.items()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)