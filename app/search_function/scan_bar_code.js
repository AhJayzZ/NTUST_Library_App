import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('請掃館藏條碼號或ISBN')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        //console.log('Type: ' + type + '\nData: ' + data)
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }

    // Return the View
    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }} />
            </View>
            <Text style={styles.ScanText} selectable={true}>{text}</Text>

            {
                scanned &&
                <View>
                    <TouchableOpacity style={styles.Buttom_1} onPress={() => { setScanned(false), setText("") }}>
                        <Text style={styles.Txt_buttom}>
                            再掃一次
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttom_1} onPress={() => { alert("send text to search") }}>
                        <Text style={styles.Txt_buttom}>
                            確認
                        </Text>
                    </TouchableOpacity>
                </View>

            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2E6F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ScanText: {
        fontSize: 24,
        margin: 20,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,

        //backgroundColor: 'tomato'
    },
    Buttom_1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 19,
        paddingRight: 19,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "rgba(0,91,172,1)",
    },
    Txt_buttom: {
        fontSize: 24,
        fontWeight: "400",
        color: "rgba(226,230,242,1)",
        textAlign: "center",
        justifyContent: "center",
    },
});