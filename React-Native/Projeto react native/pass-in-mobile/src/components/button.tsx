import { TouchableOpacity, TouchableOpacityProps , Text, ActivityIndicator } from "react-native";


type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props){
    return (

        <TouchableOpacity 
        activeOpacity={0.7}
        disabled={isLoading} 
        style={{
            width: '100%',
            height: 56,
            backgroundColor: isLoading ? '#32CD32' : '#32CD32',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
        {...rest}>
        
        
        {   
            isLoading ? (<ActivityIndicator className="text-green-500" />)
            : (

                <Text className="text-black text-base font-bold uppercase">
                    {title}
                </Text>
            )
        }
    </TouchableOpacity>
    )
}