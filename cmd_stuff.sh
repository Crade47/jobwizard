#!/bin/bash

while true; do
    echo "Select an option:"
    echo "1) (DEV) Docker Compose with Rebuild"
    echo "2) (PROD) Docker Compose with Rebuild"
    echo "3) (DEV) Docker Compose"
    echo "4) (PROD) Docker Compose"
    echo "5) Interactive Docker Shell"
    echo "6) Exit"

    read -p "Enter your choice (1-6): " choice

    case $choice in
        1)
            echo "(DEV) Building docker container from scratch $(date)"
            docker compose -f docker-compose.dev.yaml up --build
            exit 0
            ;;
        2)
            echo "(PROD) Building docker container from scratch $(date)"
            docker compose -f docker-compose.yaml up --build
            exit 0
            ;;
        3)
            echo "(DEV) Docker Compose"
            docker compose -f docker-compose.dev.yaml up
            exit 0
            ;;
        4)
            echo "(PROD) Docker Compose"
            docker compose -f docker-compose.yaml up
            exit 0
            ;;
        5) 
            echo "Starting Interactive shell"
            docker exec -it jobwizard_fe-frontend-1 sh
            exit 0
            ;;
        6)
            echo "Exiting... Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice. Please select a number between 1 and 5."
            ;;
    esac

    echo ""  # Add a blank line for readability
done
