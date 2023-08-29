use rand::Rng;

pub struct ColorData {
    pub hex_colors: [u32; 6],
    pub lock_colors: [bool; 6],
}

impl ColorData {
    pub fn new() -> Self {
        let mut color_data = ColorData {
            hex_colors: [
                0x1A2B3C4D, 0x5E6F7081, 0x92A3B4C5, 0xD6E7F809, 0x2A3B4C5D, 0x6E7F8091,
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
            self.hex_colors[index] = rand::random::<u32>() & 0x00FFFFFF;
        }
    }
}

pub static mut COLOR_DATA: ColorData = ColorData::new();
