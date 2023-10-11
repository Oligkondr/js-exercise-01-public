const determineTimeOfDay = (time) => {
    if (time >= 6 && time < 12) {
        return 'утро'
    }else if (time >= 12 && time < 18) {
        return 'день'
    }else if (time >= 18 && time < 22) {
        return 'вечер'
    }else if ((time >= 22 && time <= 23) || (time >= 0 && time < 6)) {
        return 'ночь'
    }else {
        return 'ошибка данных'
    }
};

export { determineTimeOfDay };