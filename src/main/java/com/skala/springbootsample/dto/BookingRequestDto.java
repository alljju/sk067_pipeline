package com.skala.springbootsample.dto;

public class BookingRequestDto {
    private String bookingId;
    private String customerName;

    // Getter, Setter
    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
}
