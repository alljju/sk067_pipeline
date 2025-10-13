package com.skala.springbootsample.repo;

import com.skala.springbootsample.domain.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    
    // 결제 ID로 결제 정보 찾기
    Payment findByTransactionId(String transactionId);
    
    // 특정 예약 ID로 결제 정보 찾기
    List<Payment> findByBooking_Id(Long bookingId);
}
