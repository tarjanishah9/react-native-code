import {
    View,
    Text,
    TextInput,
    Pressable,
    ActivityIndicator,
  } from 'react-native';
  import { useState } from 'react';
  import { Picker } from '@react-native-picker/picker';
  import DateTimePicker from '@react-native-community/datetimepicker';
  
  export default function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('Delhi');
    const [terms, setTerms] = useState(false);
    const [dob, setDob] = useState(new Date());
  
    const [showDate, setShowDate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubmit = () => {
      setError('');
  
      if (!name || !email || !password) {
        setError('All fields are required');
        return;
      }
  
      if (!email.includes('@')) {
        setError('Invalid email');
        return;
      }
  
      if (password.length < 6) {
        setError('Password must be 6 characters');
        return;
      }
  
      if (!gender) {
        setError('Select gender');
        return;
      }
  
      if (!terms) {
        setError('Accept terms & conditions');
        return;
      }
  
      // ✅ Show loader
      setLoading(true);
  
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        alert('Form submitted successfully ✅');
      }, 2000);
    };
  
    return (
      <View style={{ padding: 20 }}>
  
        {/* Name */}
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        />
  
        {/* Email */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        />
  
        {/* Password */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        />
  
        {/* Radio Button (Gender) */}
        <Text>Gender</Text>
        {['Male', 'Female'].map(item => (
          <Pressable
            key={item}
            onPress={() => setGender(item)}
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 9,
                borderWidth: 2,
                marginRight: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {gender === item && (
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'black',
                  }}
                />
              )}
            </View>
            <Text>{item}</Text>
          </Pressable>
        ))}
  
        {/* Picker */}
        <Text style={{ marginTop: 10 }}>City</Text>
        <Picker
          selectedValue={city}
          onValueChange={setCity}
        >
          <Picker.Item label="Delhi" value="Delhi" />
          <Picker.Item label="Mumbai" value="Mumbai" />
          <Picker.Item label="Ahmedabad" value="Ahmedabad" />
        </Picker>
  
        {/* Date Picker */}
        <Pressable
          onPress={() => setShowDate(true)}
          style={{ marginVertical: 10 }}
        >
          <Text>Select DOB: {dob.toDateString()}</Text>
        </Pressable>
  
        {showDate && (
          <DateTimePicker
            value={dob}
            mode="date"
            onChange={(e, d) => {
              setShowDate(false);
              if (d) setDob(d);
            }}
          />
        )}
  
        {/* Checkbox */}
        <Pressable
          onPress={() => setTerms(!terms)}
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 2,
              marginRight: 8,
              backgroundColor: terms ? 'black' : 'white',
            }}
          />
          <Text>Accept Terms & Conditions</Text>
        </Pressable>
  
        {/* Error */}
        {error !== '' && (
          <Text style={{ color: 'red', marginBottom: 10 }}>
            {error}
          </Text>
        )}
  
        {/* Submit Button */}
        <Pressable
          onPress={handleSubmit}
          disabled={loading}
          style={{
            backgroundColor: '#2196F3',
            padding: 12,
            alignItems: 'center',
          }}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: 'white' }}>Submit</Text>
          )}
        </Pressable>
  
      </View>
    );
  }