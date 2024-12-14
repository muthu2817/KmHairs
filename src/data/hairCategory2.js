import img from '../assets/bg_none2.png';
import img1 from '../assets/multicolor.jpg';
import img2 from '../assets/brown-black.jpg';
import img3 from '../assets/naturalgray.jpg';
import img4 from '../assets/weftedBlack1.jpg';
import img5 from '../assets/naturalBlack.jpg';

export const rawHair = [

    {
        id: 1,
        Category: 'Raw unwashed remy hair',
        detail: "Unwashed Remy hair refers to high-quality human hair collected with its cuticles intact and aligned, ensuring a natural look and longevity. Since it hasn't been chemically processed or washed, it retains its original texture and strength.",
        sub: [
            {
                id: 1,
                Category: 'natural black/brown',
                img_path: img2
            },
            {
                id: 2,
                Category: 'natural gray',
                img_path: img3
            },
            {
                id: 3,
                Category: 'dyed hair/ multi-coloured hair',
                img_path: img1
            }
        ]
    },
    {
        id: 2,
        Category: 'Unprocessed washed Remy Hair ',
        detail: "Unprocessed washed Remy hair is high-quality human hair that has been gently cleaned without altering its natural state. It retains its intact cuticles and original texture, ensuring durability and a natural look.",
        sub: [
            {
                id: 21,
                Category: 'natural black',
                img_path: img5,
                int_sub: [
                    {
                        id: 211,
                        Category: 'natural straight',
                        img_path: img
                    },
                    {
                        id: 212,
                        Category: 'natural wavy',
                        img_path: img
                    },
                    {
                        id: 213,
                        Category: 'natural curly',
                        img_path: img
                    }
                ]

            },
            {
                id: 2,
                Category: 'natural grey',
                img_path: img3

            },
            {
                id: 3,
                Category: 'dyed hair',
                img_path: img1

            }
        ]
    },
    {
        id: 3,
        Category: 'Unprocessed Remy Wefted hair ',
        detail: "Unprocessed Remy Wefted hair is high-quality human hair with cuticles intact and aligned. It is stitched into wefts without chemical processing, ensuring a natural, tangle-free, and long-lasting product.",
        sub: [
            {
                id: 31,
                Category: 'natural black',
                img_path: img5,
                int_sub: [
                    {
                        id: 311,
                        Category: 'natural straight',
                        img_path: img
                    },
                    {
                        id: 312,
                        Category: 'natural wavy',
                        img_path: img
                    },
                    {
                        id: 313,
                        Category: 'natural curly',
                        img_path: img
                    }
                ]
            }
        ]
    }
]