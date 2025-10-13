package com.skala.springbootsample.service;

import com.skala.springbootsample.dto.PaymentRequestDto;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public Object processPayment(PaymentRequestDto requestDto) {
        // 결제 처리 로직 처리
        return null; // 결제 처리 정보 리턴
    }
}
