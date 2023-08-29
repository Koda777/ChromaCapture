use tauri::command;
mod hex_colors;

#[command]
pub fn set_color() -> String {
    let color = hex_colors::HEX_COLORS;
}
