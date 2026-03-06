package com.vrss.config;


import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager;
import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManagerBuilder;
import org.apache.hc.client5.http.ssl.ClientTlsStrategyBuilder;
import org.apache.hc.client5.http.ssl.TlsSocketStrategy;
import org.apache.hc.core5.ssl.SSLContextBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

import javax.net.ssl.SSLContext;
import java.io.FileInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.cert.Certificate;
import java.security.cert.CertificateFactory;
import java.util.Collection;

@Configuration
public class ConfigClass {

    @Bean
    public RestTemplate restTemplate() throws Exception {

        String pemPath = "C:/Users/sshalem/OneDrive - ASML/ASML/BRES_pem/f28ecentre01-intel-com-chain.pem";

        CertificateFactory cf = CertificateFactory.getInstance("X.509");
        InputStream is = new FileInputStream(pemPath);

        Collection<? extends Certificate> certs = cf.generateCertificates(is);

        KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
        trustStore.load(null, null);

        int i = 0;
        for (Certificate cert : certs) {
            trustStore.setCertificateEntry("cert-" + i++, cert);
        }

        SSLContext sslContext = SSLContextBuilder.create()
                .loadTrustMaterial(trustStore, null)
                .build();

        TlsSocketStrategy tlsStrategy =
                (TlsSocketStrategy) ClientTlsStrategyBuilder.create()
		        .setSslContext(sslContext)
		        .build();

        PoolingHttpClientConnectionManager connectionManager =
                PoolingHttpClientConnectionManagerBuilder.create()
                        .setTlsSocketStrategy(tlsStrategy)
                        .build();

        CloseableHttpClient httpClient =
                HttpClients.custom()
                        .setConnectionManager(connectionManager)
                        .build();

        HttpComponentsClientHttpRequestFactory factory =
                new HttpComponentsClientHttpRequestFactory(httpClient);

        return new RestTemplate(factory);
    }
}