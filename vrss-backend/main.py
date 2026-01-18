from fastapi import FastAPI

from asml.router import router as asml_router

app = FastAPI()

app.include_router(asml_router, prefix="/asml")