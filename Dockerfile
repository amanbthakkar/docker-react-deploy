# as builder sets the name of this stage of the whole process, that we can reference later
FROM node:16-alpine as builder 

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

# a new FROM automatically signals start of new stage, no name required 
FROM nginx
# the build folder has to be copied to /usr/share/nginx/html (as per docs)
COPY --from=builder /app/build /usr/share/nginx/html

