'use server';

export async function createBookingRequest(formData: FormData) {


    const rawFormData = {
        firstName: formData.get('firstname'),
        lastName: formData.get('lastname'),
        email: formData.get('email'),
        number: formData.get('number'),
        startDate: formData.get('start'),
        endDate: formData.get('end'),
      };
      // Test it out:
      console.log(rawFormData)
}