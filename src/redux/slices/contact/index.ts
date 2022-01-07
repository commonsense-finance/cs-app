import { RootState } from '@redux/reducers'
import { IContact } from '@redux/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: IContact = {
  id: '',
  email: '',
  merge_fields: {
    FNAME: '',
    ADDRESS: '',
    STATUS: 'Not Connected',
  },
  isLogin: false,
  action: 'Saved',
}

// const getContactByEmail = async (email: string) => {
//   try {
//     const res = await fetch('/api/contact/', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(email),
//     })
//     const contact = await res.json()
//     console.log('Get Contact...', contact)
//     return contact
//   } catch (error) {
//     alert(error)
//   }
// }

// const AddUpdate = async (contact: IContact) => {
//   const action = contact.action == 'Adding' ? 'add' : 'update'
//   try {
//     const res = await fetch('/api/contact/' + action, {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contact),
//     })
//     console.log(res)
//     const newContact = await res.json()
//     console.log(newContact)

//     if (res.status === 200) {
//       alert('You are subscribed!')
//     } else {
//       alert('Sorry, something went wrong.')
//     }
//   } catch (error) {
//     alert(error)
//   }
// }

export const setContact = createAsyncThunk(
  'contact/setContact',
  async (_, thunkApi) => {
    const { contact } = thunkApi.getState() as RootState
    console.log(contact)
    try {
      const res = await fetch('/api/contact/' + contact.action, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      })
      const newContact = await res.json()
      console.log(newContact)
      if (res.status === 200) {
        alert('You are Subscribed!')
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch (error) {
      alert(error)
    }
  },
)

export const setContactConnected = createAsyncThunk(
  'contact/setContactConnected',
  async (account: string, thunkAPI) => {
    const { contact } = thunkAPI.getState() as RootState
    const dispatch = thunkAPI.dispatch
    console.log(contact.merge_fields)
    try {
      const res = await fetch('/api/contact/update', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...contact, merge_fields: {...contact.merge_fields, ADDRESS: account, STATUS: 'Connected'},}),
      })
      if (res.status === 200) {
        dispatch(setAccount(account))
        dispatch(setStatus('Connected'))
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch (error) {
      alert(error)
    }
  },
)

export const getContactByEmail = createAsyncThunk(
  'contact/getContactByEmail',
  async (email: string, thunkAPI) => {
    try {
      const response = await fetch('/api/contact/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      })
      if (response.status === 200) return await response.json()
    } catch (error) {
      alert(error)
    }
  },
)

export const getContactByAddress = createAsyncThunk(
  'contact/getContactByAddress',
  async (account: string, thunkAPI) => {
    try {
      const response = await fetch('/api/contact/' + account + '/', {
        method: 'get',
      })
      if (response.status === 200)
          return await response.json()
    } catch (error) {
      alert(error)
    }
  },
)

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setInitial: (state, action) => {
      state.id = ''
      state.email = ''
      ;(state.merge_fields = {
        FNAME: '',
        ADDRESS: '',
        STATUS: 'Not Connected',
      }),
        (state.isLogin = false)
      state.action = 'Saved'
    },
    setContactState: (state, action) => {
      state.id = action.payload.contact_id
      state.email = action.payload.email_address
      state.merge_fields = action.payload.merge_fields
      state.isLogin = true
      state.action = 'Saved'
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setName: (state, action) => {
      state.merge_fields.FNAME = action.payload
    },
    setAccount: (state, action) => {
      state.merge_fields.ADDRESS = action.payload
    },
    setStatus: (state, action) => {
      state.merge_fields.STATUS = action.payload
    },
    setContactAction: (state, action) => {
      state.action = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContactByAddress.fulfilled, (state, action) => {
      const res = action.payload
      if (res.total_items > 0) {
        const contact = action.payload.members[0]
        state.id = contact.contact_id
        state.email = contact.email_address
        state.merge_fields = contact.merge_fields
        state.isLogin = true
        state.action = 'Saved'
      }
    }),
      builder.addCase(getContactByEmail.fulfilled, (state, action) => {
        const res = action.payload
        console.log(res)
        if (res.total_items > 0) {
          const contact = action.payload.members[0]
          state.id = contact.contact_id
          state.email = contact.email_address
          state.merge_fields = contact.merge_fields
          state.isLogin = true
          state.action = 'Saved'
        }
      }),
    
      builder.addCase(setContact.fulfilled, (state, action) => {
        
      }),

      builder.addCase(setContactConnected.fulfilled, (state, action) => {
   
      })

  },
})

export const {
  setInitial,
  setEmail,
  setName,
  setAccount,
  setStatus,
  setContactAction,
} = contactSlice.actions

export const selectContact = (state: RootState) => state.contact

export default contactSlice.reducer
