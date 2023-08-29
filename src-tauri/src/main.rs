#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod hex_colors;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![commands::set_color])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
