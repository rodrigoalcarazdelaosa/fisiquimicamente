#!/usr/bin/env bash

export HUGOxPARAMSxGITxLAST_COMMITxHASH=$(git log -1 --format=%H)
export HUGOxPARAMSxGITxLAST_COMMITxABBREV_HASH=$(git log -1 --format=%h)