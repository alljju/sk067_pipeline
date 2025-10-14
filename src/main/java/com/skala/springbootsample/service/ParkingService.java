package com.skala.springbootsample.service;

import com.skala.springbootsample.dto.ParkingRequestDto;
import org.springframework.stereotype.Service;

@Service
public class ParkingService {

    public Object searchParking(ParkingRequestDto requestDto) {
        // 주차장 검색 로직 처리 (DB 조회 등)
        return null; // 검색된 결과 리턴
    }

    public Object checkAvailability(Long parkingId, String startDateTime, String endDateTime) {
        // 주차 가능 여부 확인 로직 처리
        return null; // 주차 가능 여부 리턴
    }
}
