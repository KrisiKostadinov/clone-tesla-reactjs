import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: ['Model 3', 'Model Y', 'Model S', 'Model X'],
    sections: [
        {
            bgImage: 'src/assets/Model-3.jpg',
            title: 'Model 3',
            subtitle: 'Schedule a Test Drive',
            leftButton: 'Custom Order',
            rightButton: 'Existing Enventory',
        },
        {
            bgImage: 'src/assets/Model-Y.jpg',
            title: 'Model Y',
            subtitle: 'Schedule a Test Drive',
            leftButton: 'Custom Order',
            rightButton: 'Existing Enventory',
        },
        {
            bgImage: 'src/assets/Model-S.jpg',
            title: 'Model S',
            subtitle: 'Schedule a Test Drive',
            leftButton: 'Custom Order',
            rightButton: 'Existing Enventory',
        },
        {
            bgImage: 'src/assets/Model-X.jpg',
            title: 'Model X',
            subtitle: 'Schedule a Test Drive',
            leftButton: 'Custom Order',
            rightButton: 'Existing Enventory',
        },
        {
            bgImage: 'src/assets/Accsessoary.jpg',
            title: 'Accessories',
            leftButton: 'Shop Now',
            accessoriesSection: true,
        },
    ]
}

export const carSlice = createSlice({
    name: 'car',
    initialState: initialState,
});

export default carSlice.reducer;