# Stage 1: Build the Vite application
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN yarn build

# Stage 2: Serve the built app with Apache
FROM httpd:alpine

# Copy the built application from the build stage
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Expose port 80 for Apache
EXPOSE 80

# Set the ServerName directive to avoid the warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Start Apache
CMD ["httpd-foreground"]
