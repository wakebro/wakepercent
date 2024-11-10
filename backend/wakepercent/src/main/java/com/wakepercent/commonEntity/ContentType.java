package com.wakepercent.commonEntity;

public enum ContentType {
    SITE, ME, PROJECT;

//    private String code;
    public static ContentType of(String contentTypeStr) {
        for (ContentType ct : ContentType.values()) {
            if (ct.toString().equals(contentTypeStr)) return ct;
        }
        throw new IllegalArgumentException("일치하는 타입이 없스빈다.");
    }
}
