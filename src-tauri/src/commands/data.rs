use once_cell::sync::Lazy;
use random_color::{Luminosity, RandomColor};

pub struct ColorData {
    pub hex_colors: [String; 6],
    pub lock_colors: [bool; 6],
}

impl ColorData {
    pub fn new() -> Self {
        let mut color_data = ColorData {
            hex_colors: [
                String::from("#fff"),
                String::from("#fff"),
                String::from("#fff"),
                String::from("#fff"),
                String::from("#fff"),
                String::from("#fff"),
            ],
            lock_colors: [false, false, false, false, false, false],
        };

        for i in 0..6 {
            color_data.set_random_color(i);
        }
        color_data
    }

    fn set_random_color(&mut self, index: usize) {
        if self.lock_colors[index] == false {
            self.hex_colors[index] = RandomColor::new().luminosity(Luminosity::Light).to_hex();
        }
    }
}

pub static COLOR_DATA: Lazy<ColorData> = Lazy::new(|| ColorData::new());
