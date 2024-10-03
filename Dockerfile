# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the application port
EXPOSE 8090

# Run the app using nodemon for hot-reload (or `node` for production)
CMD ["npx", "nodemon", "--watch", ".", "index.js"]
