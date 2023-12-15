# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Strapi dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Strapi runs on
EXPOSE 1337

# Define the command to run your Strapi application
CMD ["npm", "start"]
