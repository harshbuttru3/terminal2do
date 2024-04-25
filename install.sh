#!/bin/bash

chmod +x todo.js
sudo cp todo.js /usr/local/bin/todo

# Function to display ASCII art for each phrase with a one-second delay
function displayAsciiArt() {
    color_green='\033[0;32m'  # Green color
    color_red='\033[0;31m'    # Red color
    color_reset='\033[0m'     # Reset color

    for phrase in "$@"; do
        clear
        case "$phrase" in
            *"█████   █████"* ) echo -e "${color_red}$phrase${color_reset}" ;;
            *"█████"* ) echo -e "${color_green}$phrase${color_reset}" ;;
            *) echo "$phrase" ;;
        esac
        sleep 1
    done
}


# Call the function with the phrases you want to display
displayAsciiArt "
 ___, ,  _, 
' | |_|,/_, 
  |'| |'\_  
  ' ' `   ` 
            " "
 ██████╗ ██████╗ ███████╗ █████╗ ████████╗
██╔════╝ ██╔══██╗██╔════╝██╔══██╗╚══██╔══╝
██║  ███╗██████╔╝█████╗  ███████║   ██║   
██║   ██║██╔══██╗██╔══╝  ██╔══██║   ██║   
╚██████╔╝██║  ██║███████╗██║  ██║   ██║   
 ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   
                                          " "
 ██░ ██  ▄▄▄       ▄████▄   ██ ▄█▀▓█████  ██▀███  
▓██░ ██▒▒████▄    ▒██▀ ▀█   ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒
▒██▀▀██░▒██  ▀█▄  ▒▓█    ▄ ▓███▄░ ▒███   ▓██ ░▄█ ▒
░▓█ ░██ ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄  
░▓█▒░██▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄░▒████▒░██▓ ▒██▒
 ▒ ░░▒░▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░
 ▒ ░▒░ ░  ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░
 ░  ░░ ░  ░   ▒   ░        ░ ░░ ░    ░     ░░   ░ 
 ░  ░  ░      ░  ░░ ░      ░  ░      ░  ░   ░     
                  ░                               " "
█████   █████                             █████     
░░███   ░░███                             ░░███      
 ░███    ░███   ██████   ████████   █████  ░███████  
 ░███████████  ░░░░░███ ░░███░░███ ███░░   ░███░░███ 
 ░███░░░░░███   ███████  ░███ ░░░ ░░█████  ░███ ░███ 
 ░███    ░███  ███░░███  ░███      ░░░░███ ░███ ░███ 
 █████   █████░░████████ █████     ██████  ████ █████
░░░░░   ░░░░░  ░░░░░░░░ ░░░░░     ░░░░░░  ░░░░ ░░░░░ 
                                                     
                                                     
                                                     "
echo "The todo app is successfully installed in your computer."
echo "execute it with the command "todo" from anywhere in terminal".
echo "Happy Hacking..."