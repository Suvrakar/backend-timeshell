# Use an official Node.js 18 Alpine image as a parent image
FROM node:18-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Set the working directory in the container to /opt/app
WORKDIR /opt/app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install global dependencies
RUN npm install -g node-gyp

# Install app dependencies
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Add node_modules binaries to PATH
ENV PATH /opt/app/node_modules/.bin:$PATH

# Copy the application files into the container
COPY . .

# Change ownership to the non-root node user
RUN chown -R node:node /opt/app

# Switch to the non-root node user
USER node

# Run the build script
RUN npm run build

# Expose port 8000
EXPOSE 8000

# Run Strapi in development mode by default
CMD ["npm", "run", "develop"]
