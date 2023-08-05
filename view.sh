#!/usr/bin/env bash

source get_last_commit_hash.sh

hugo server --renderStaticToDisk --disableFastRender --printI18nWarnings --buildFuture