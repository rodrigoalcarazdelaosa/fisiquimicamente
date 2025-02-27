#!/usr/bin/env bash

source get_last_commit_hash.sh

hugo server --panicOnWarning --renderStaticToDisk --disableFastRender --printI18nWarnings --buildFuture