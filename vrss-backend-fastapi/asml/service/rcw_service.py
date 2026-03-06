import requests
import os
import pandas as pd
import re
from core.logging_config import setup_logging
import logging

######################
#     logging
######################
setup_logging(level=logging.DEBUG, log_to_file=False)
logger = logging.getLogger(__name__)

machine_ids = ['EU04', 'IE81', 'BO97', 'FK97', 'HU08', 'JE30', 'JT67', 'GE06', 'KU70', 'FE07', 'BN42', 'EV90', 'GG99',
               'IJ97', 'DG24', 'BS37', 'AP43', 'FH99', 'IQ09', 'FV21']


def download_all_logs():
    logger.info("Downloading all logs")
    username = "asml_sshalem"
    password = "Odel1@"
    for machine_id in machine_ids:
        url = f"https://f28ecentre01.intel.com/ecweb/echttpproxy/ASML.TWINSCAN.M{machine_id}.HTTP/AIDwebdav/root/CT/CTRW_log_m{machine_id}.cur"
        save_path = f"C:\\Users\\sshalem\\OneDrive - ASML\\Documents\\test\\m{machine_id}.csv"
        download_file(url, save_path, username, password)


def download_file(url, save_path, username=None, password=None):
    try:
        if username and password:
            response = requests.get(url, auth=(username, password),
                                    verify="C://Users//sshalem//OneDrive - ASML//ASML//BRES_pem//f28ecentre01-intel-com-chain.pem")
        #     verify="C://Users//rvazana//Downloads//f28ecentre01-intel-com-chain.pem")
        else:
            response = requests.get(url)
        response.raise_for_status()  # Raise error for bad status codes
        with open(save_path, 'wb') as file:
            file.write(response.content)
        logger.info(f"File downloaded successfully and saved to: {save_path}")
    except requests.exceptions.SSLError as ssl_err:
        logger.error(f"SSL certificate verification failed: {ssl_err}")
    except requests.exceptions.RequestException as e:
        logger.error(f"Error downloading file: {e}")
