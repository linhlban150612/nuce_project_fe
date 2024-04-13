import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const doctorApi = createApi({
    reducerPath: "doctor",
    tagTypes: ["DOCTOR"],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE + "/api/v1",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        searchDoctors: builder.mutation<any, { type: number, name: string | null; clinic: string | null; speciality: string | null; page: number; resultLimit: number }>({
            query: ({ name, clinic, speciality, page, resultLimit, type }) => ({
                url: 'public/doctors/all',
                method: 'GET',
                params: { name, clinic, speciality, page, resultLimit, type },
            }),
            invalidatesTags: ['DOCTOR']
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getAllDoctors: builder.query<any, { type: number | string, name: string | null; clinic: string | null; speciality: string | null; page: number; resultLimit: number }>({
            query: ({ name, clinic, speciality, page, resultLimit, type }) => ({
                url: 'public/doctors/all',
                method: 'GET',
                params: { name, clinic, speciality, page, resultLimit, type },
            }),
            providesTags: ['DOCTOR']
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getByIdDoctor: builder.query<any, number | string>({
            query: (id) => "/public/doctors/get/" + id,
            providesTags: ['DOCTOR']
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        updateDoctor: builder.mutation<any, any>({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            query: (doctor: any) => ({
                url: `admin/user/update`,
                method: "PUT",
                body: doctor
            }),
            invalidatesTags: ['DOCTOR']
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        updateService: builder.mutation<any, any>({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            query: (doctor: any) => ({
                url: `admin/user/update`,
                method: "PUT",
                body: doctor
            }),
            invalidatesTags: ['DOCTOR']
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getServiceDoctor: builder.query<any, void>({
            query: () => "/admin/doctors/manageService",
            providesTags: ['DOCTOR']
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        searchServiceDoctor: builder.mutation<any, { idService: string | null; status: string | null; fromDate: string | null; toDate: string | null; }>({
            query: ({ idService, status, fromDate, toDate }) => ({
                url: '/admin/doctors/manageService',
                method: 'POST',
                body: { idService, status, fromDate, toDate },
            }),
            invalidatesTags: ['DOCTOR']
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        closeBooking: builder.mutation<any, { idBooking: string | null; msg: string | null; }>({
            query: ({ idBooking, msg }) => ({
                url: '/admin/doctors/closeBooking',
                method: 'POST',
                body: { idBooking, msg },
            }),
            invalidatesTags: ['DOCTOR']
        }),
    }),
});


export const {
    useGetByIdDoctorQuery,
    useSearchDoctorsMutation,
    useUpdateDoctorMutation,
    useGetServiceDoctorQuery,
    useSearchServiceDoctorMutation,
    useCloseBookingMutation,
    useGetAllDoctorsQuery

} = doctorApi;

export const doctorApiReducer = doctorApi.reducer;

export default doctorApi;