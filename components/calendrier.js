import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useState, useEffect } from 'react';

const ShowCalendar = () => {
    const [selected, setSelected] = useState('');
    console.log('selected day');

    return (
        <View style={styles.main}>
            <Calendar style={styles.calendar}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
    justifyContent:'center',

     height:'100%',

    },
})
export default ShowCalendar;