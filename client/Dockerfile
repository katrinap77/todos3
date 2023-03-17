# FROM node:16-alpine

# WORKDIR /app

# # add patch to fix a reloading bug - so that for hot-reloading via bind mount,
# # the user/developer does not need to use refresh button in the browser to reload code changes
# ENV CHOKIDAR_USEPOLLING=true

# # copy all into app folder
# COPY . /app

# # run an install
# RUN ["npm","install"]

# # expose a port (of the docker container) where the client/app should run
# EXPOSE 3000

# CMD ["npm", "start"]

FROM node:14-alpine
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY package*.json /app/
RUN ["npm", "install"]
COPY . /app
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
