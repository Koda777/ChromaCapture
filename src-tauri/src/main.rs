#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use commands::data::COLOR_DATA;
use commands::{get_colors, set_color, set_lock};
use device_query::{DeviceQuery, DeviceState, Keycode};
use std::thread;
use tauri::App;
mod commands;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![set_color, set_lock, get_colors])
        .setup(|app| setup(app))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn setup(app: &App) -> Result<(), Box<dyn std::error::Error + 'static>> {
    let app_handle = app.handle();
    let mut space_pressed = false;
    let device_state = DeviceState::new();

    thread::spawn(move || loop {
        let keys: Vec<Keycode> = device_state.get_keys();
        let space_key_pressed = keys.contains(&Keycode::Space);
        if space_key_pressed && !space_pressed {
            for i in 0..6 {
                unsafe { COLOR_DATA.set_random_color(i) }
            }
            space_pressed = true;
        } else if !space_key_pressed {
            space_pressed = false;
        }
    });
    Ok(())
}
