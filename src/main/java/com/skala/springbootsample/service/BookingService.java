package main.java.com.skala.springbootsample.service;

import com.skala.springbootsample.dto.BookingRequestDto;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    public Object createBooking(BookingRequestDto requestDto) {
        // 예약 생성 로직 처리
        return null; // 예약 정보 리턴
    }

    public Object getBooking(String bookingId) {
        // 예약 조회 로직 처리
        return null; // 예약 정보 리턴
    }

    public Object cancelBooking(String bookingId) {
        // 예약 취소 로직 처리
        return null; // 예약 취소된 정보 리턴
    }
}
