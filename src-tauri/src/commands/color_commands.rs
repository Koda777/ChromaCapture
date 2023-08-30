use crate::commands::data::COLOR_DATA;

use tauri::command;

#[command]
pub fn set_color() -> () {}

#[command]
pub fn set_lock() -> () {}

#[command]
pub fn get_colors() -> String {}
