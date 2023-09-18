use std::println;

use crate::commands::data::COLOR_DATA;
use serde_json::to_string;

use tauri::command;

#[command]
pub fn set_color() -> () {}

#[command]
pub fn set_lock(index: usize) -> () {
    unsafe { COLOR_DATA.lock_colors[index] = !COLOR_DATA.lock_colors[index] };
}


#[command]
pub async fn get_colors() -> Result<String, String> {
    let json = unsafe {
        match to_string(&COLOR_DATA.hex_colors) {
            Ok(s) => s,
            Err(_) => String::from("Error converting to JSON"),
        }
    };
    Ok(json)
}
