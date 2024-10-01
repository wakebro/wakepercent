FROM openjdk:17-jdk-slim
ARG JAR_FILE=./wakepercent/build/libs/*.jar
COPY ${JAR_FILE} app.jar

# Set the working directory in the container
WORKDIR /app

# Download and cache dependencies
# RUN /app/gradlew build -x test

# # Command to run the application
# CMD ["./gradlew", "bootRun"]

# ENTRYPOINT ["java","-jar","/app.jar"]