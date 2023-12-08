import { createSlice } from "@reduxjs/toolkit"

 type CurrentWeather = {
  weather: any,
  isLoading: boolean,
  response: Respons
 }
 type Respons = {
  status: number,
  message: string,
 }

 const initialState: CurrentWeather = {
  weather: {},
  isLoading: false,
  response: {
    status: 0,
    message: '',
  }
}

export const currenWeatherSlice = createSlice({
  name: 'curren_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    }
    fetchCurrentWeatherSuccess(state, action:any) {
      // state.weather = action
    }
  }
})