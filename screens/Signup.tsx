import { useCallback } from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Platform, StatusBar } from 'react-native'
import { Icon } from '@rneui/themed'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Signup() {

    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;


    const [fontsLoaded] = useFonts({
        'metropolis': require('../assets/fonts/Metropolis-Bold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ marginTop: statusBarHeight }} className='mx-4 flex-1' onLayout={onLayoutRootView}>
            <View>
                <View className='flex items-start pt-5 pb-3'>
                    <Icon name='arrow-back-ios' size={24} type='material' />
                </View>
                <View className='mt-5 '>
                    <Text className='text-3xl font-bold text-[#222222] font-[metropolis] ' >Sign up</Text>
                </View>
            </View>
            <View>
                <View className='mt-16'>
                    <View className=' bg-white shadow flex flex-row items-center mb-2 rounded' >
                        <View className='py-3 px-5 flex-1'>
                            <Text className='text-[#9B9B9B] text-xs font-normal font-[metropolis]'>Name</Text>
                            <TextInput className='text-sm font-medium leading-5 font-[metropolis]' value='adasd' />
                        </View>
                        <View className='mr-5'>
                            {
                                true && <Icon name='done' size={32} color='#2AA952' type='material' />
                            }
                        </View>
                    </View>
                    <View className=' bg-white shadow flex flex-row items-center mb-2 rounded' >
                        <View className='py-3 px-5 flex-1'>
                            <Text className='text-[#9B9B9B] text-xs font-normal font-[metropolis]'>Email</Text>
                            <TextInput className='text-sm font-medium leading-5 font-[metropolis]' value='adasd' />
                        </View>
                        <View className='mr-5'>
                            {
                                true && <Icon name='done' size={32} color='#2AA952' type='material' />
                            }
                        </View>
                    </View>
                    <View className=' bg-white shadow flex flex-row items-center mb-2 rounded' >
                        <View className='py-3 px-5 flex-1'>
                            <Text className='text-[#9B9B9B] text-xs font-normal font-[metropolis]'>Password</Text>
                            <TextInput textContentType='password' className='text-sm font-medium leading-5 font-[metropolis]' value='adasd' />
                        </View>
                        <View className='mr-5'>
                            {
                                true && <Icon name='done' size={32} color='#2AA952' type='material' />
                            }
                        </View>
                    </View>
                </View>

                <TouchableOpacity className='mt-2 flex flex-row items-center justify-end'>
                    <Text className='text-[#222222] font-medium mr-1 font-[metropolis]'>Alerady have an account</Text>
                    <Icon name='arrow-right-alt' type='meterial' color="#DB3022" />
                </TouchableOpacity>

                <TouchableOpacity className='mt-7 items-center py-[14px] rounded-3xl shadow shadow-[#DB3022] bg-[#DB3022] '>
                    <Text className='text-[#ffffff] text-sm  font-[metropolis] '>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View className='flex-1 mt-3 items-center justify-center bg-white'>
                <Text className='text-[#222222] text-sm font-medium leading-5 font-[metropolis]'>Or sign up with social account</Text>
                <View className=' w-[92px] h-[64px] bg-white py-5 px-8 rounded-3xl  shadow mt-3'>
                    <Image className='w-[24px] h-[24px]' source={require('../assets/google.png')} />
                </View>
            </View>
        </SafeAreaView >
    )
}

