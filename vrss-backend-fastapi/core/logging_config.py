import logging
import sys
from colorlog import ColoredFormatter

# ===========================
# Configurable variables
# ===========================
LOG_LEVEL = logging.DEBUG  # Dev: DEBUG, Prod: INFO
LOG_TO_FILE = False  # Enable file logging
LOG_FILENAME = "app.log"  # File to save logs

# Color formatter string for console logs
COLOR_FORMAT = (
    "%(log_color)s%(asctime)s  |  %(levelname)s  |  %(name)s  |  %(message)s"
)

# Dictionary
LOG_COLORS = {
    "DEBUG": "white",
    "INFO": "green",
    "WARNING": "yellow",
    "ERROR": "red",
    "CRITICAL": "bold_red",
}


def setup_logging(level=LOG_LEVEL, log_to_file=LOG_TO_FILE, filename=LOG_FILENAME):
    """
    Sets up unified logging for:
    - Root logger
    - Uvicorn loggers (uvicorn, uvicorn.error, uvicorn.access)
    - Your FastAPI app loggers
    """

    # -------------------
    # Console Handler
    # -------------------
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(ColoredFormatter(COLOR_FORMAT, log_colors=LOG_COLORS))

    # -------------------
    # Root Logger
    # -------------------
    root_logger = logging.getLogger()
    root_logger.setLevel(level)
    root_logger.handlers = [console_handler]  # overwrite default handlers

    # -------------------
    # Optional File Logging
    # -------------------
    if log_to_file:
        file_formatter = logging.Formatter(
            "%(asctime)s | %(levelname)s | %(name)s | %(message)s"
        )
        file_handler = logging.FileHandler(filename)
        file_handler.setFormatter(file_formatter)
        root_logger.addHandler(file_handler)

    # -------------------
    # Configure Uvicorn loggers to use same handlers
    # -------------------
    for uvicorn_logger_name in ("uvicorn", "uvicorn.error", "uvicorn.access"):
        logger = logging.getLogger(uvicorn_logger_name)
        logger.handlers = root_logger.handlers
        logger.setLevel(level)
