import logging
from asml.service.rcw_service import download_all_logs
from core.logging_config import setup_logging
from fastapi import APIRouter

######################
#     logging
######################
setup_logging(level=logging.DEBUG, log_to_file=False)
logger = logging.getLogger(__name__)

# APIRouter Instance
router = APIRouter()


@router.get("/download-logfiles")
def download_logfiles():
    download_all_logs()
    return {"task": "executed"}


