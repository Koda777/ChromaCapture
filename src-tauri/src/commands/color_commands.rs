use crate::commands::data::COLOR_DATA;
use serde_json::to_string;

use tauri::command;

#[command]
pub fn set_color() -> () {}

#[command]
pub fn set_lock() -> () {}


#[command]
pub async fn get_colors() -> Result<String, String> {
    let json = match to_string(&COLOR_DATA.hex_colors) {
        Ok(json) => {
            println!("{:?}", json);
            json
        }
        Err(_) => return Err(String::from("Error: Could not convert color variable to JSON")),
    };
    
    Ok(json)
}
