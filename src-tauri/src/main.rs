#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use commands::{set_color, set_lock};
mod commands;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![set_color, set_lock])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
