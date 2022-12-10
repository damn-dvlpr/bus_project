package com.routetest.routesystem.Dto;

import com.routetest.routesystem.Enums.Direction;
import com.routetest.routesystem.Enums.Status;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@RequiredArgsConstructor
public class RouteCreateRequestDto {
    String id;
    String name;
    Direction direction;
    Status status;
    List<String> stops;
}
