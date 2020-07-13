# pull official base image
FROM node:latest

ENV NODE_ENV production

# set working directory
WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --silent 
RUN npm install react-scripts -g --silent

# add app
COPY . ./

EXPOSE 5050
# start app
CMD npm start