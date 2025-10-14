package com.skala.springbootsample.repo;

import com.skala.springbootsample.domain.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;  // List 클래스 임포트


@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    
    // 추가적인 쿼리 메서드를 정의할 수 있습니다.
    // 예시: 예약 ID로 예약을 찾기
    Booking findByBookingId(String bookingId);

    // 예시: 특정 사용자의 예약을 조회
    List<Booking> findByUser_Email(String email);
}
