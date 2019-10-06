--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3 (Debian 10.3-1.pgdg90+1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

-- Started on 2019-10-06 19:37:09 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2989 (class 1262 OID 16384)
-- Name: recrutei; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE recrutei WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE recrutei OWNER TO postgres;

\connect recrutei

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12980)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2991 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16715)
-- Name: adonis_schema; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.adonis_schema (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.adonis_schema OWNER TO "user";

--
-- TOC entry 196 (class 1259 OID 16713)
-- Name: adonis_schema_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.adonis_schema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adonis_schema_id_seq OWNER TO "user";

--
-- TOC entry 2992 (class 0 OID 0)
-- Dependencies: 196
-- Name: adonis_schema_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.adonis_schema_id_seq OWNED BY public.adonis_schema.id;


--
-- TOC entry 213 (class 1259 OID 16825)
-- Name: autorizacoes; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.autorizacoes (
    id integer NOT NULL,
    nome character varying(60),
    url character varying(60),
    menu character varying(60),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    icon character varying(20),
    method character varying(50),
    controller character varying(50),
    action character varying(50)
);


ALTER TABLE public.autorizacoes OWNER TO "user";

--
-- TOC entry 212 (class 1259 OID 16823)
-- Name: autorizacoes_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.autorizacoes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.autorizacoes_id_seq OWNER TO "user";

--
-- TOC entry 2993 (class 0 OID 0)
-- Dependencies: 212
-- Name: autorizacoes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.autorizacoes_id_seq OWNED BY public.autorizacoes.id;


--
-- TOC entry 205 (class 1259 OID 16775)
-- Name: clientes; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.clientes (
    id integer NOT NULL,
    nome character varying(75),
    email character varying(75),
    telefone character varying(18),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.clientes OWNER TO "user";

--
-- TOC entry 204 (class 1259 OID 16773)
-- Name: clientes_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.clientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clientes_id_seq OWNER TO "user";

--
-- TOC entry 2994 (class 0 OID 0)
-- Dependencies: 204
-- Name: clientes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.clientes_id_seq OWNED BY public.clientes.id;


--
-- TOC entry 215 (class 1259 OID 16833)
-- Name: perfil_autorizacoes; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.perfil_autorizacoes (
    id integer NOT NULL,
    perfil_id integer,
    autorizacao_id integer,
    liberado boolean DEFAULT false,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.perfil_autorizacoes OWNER TO "user";

--
-- TOC entry 214 (class 1259 OID 16831)
-- Name: perfil_autorizacoes_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.perfil_autorizacoes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.perfil_autorizacoes_id_seq OWNER TO "user";

--
-- TOC entry 2995 (class 0 OID 0)
-- Dependencies: 214
-- Name: perfil_autorizacoes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.perfil_autorizacoes_id_seq OWNED BY public.perfil_autorizacoes.id;


--
-- TOC entry 199 (class 1259 OID 16732)
-- Name: perfis; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.perfis (
    id integer NOT NULL,
    perfil character varying(60),
    tecnico boolean DEFAULT false,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.perfis OWNER TO "user";

--
-- TOC entry 198 (class 1259 OID 16730)
-- Name: perfis_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.perfis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.perfis_id_seq OWNER TO "user";

--
-- TOC entry 2996 (class 0 OID 0)
-- Dependencies: 198
-- Name: perfis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.perfis_id_seq OWNED BY public.perfis.id;


--
-- TOC entry 217 (class 1259 OID 16852)
-- Name: status; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.status (
    id integer NOT NULL,
    inicio timestamp with time zone,
    status_inicial_id integer,
    final timestamp with time zone,
    status_final_id integer,
    tecnico_id integer,
    alterado_por_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.status OWNER TO "user";

--
-- TOC entry 216 (class 1259 OID 16850)
-- Name: status_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.status_id_seq OWNER TO "user";

--
-- TOC entry 2997 (class 0 OID 0)
-- Dependencies: 216
-- Name: status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.status_id_seq OWNED BY public.status.id;


--
-- TOC entry 211 (class 1259 OID 16799)
-- Name: tickets; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.tickets (
    id integer NOT NULL,
    problema text,
    solucao text,
    observacao text,
    tecnico_id integer,
    cliente_id integer,
    tipos_suporte_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.tickets OWNER TO "user";

--
-- TOC entry 210 (class 1259 OID 16797)
-- Name: tickets_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.tickets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tickets_id_seq OWNER TO "user";

--
-- TOC entry 2998 (class 0 OID 0)
-- Dependencies: 210
-- Name: tickets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.tickets_id_seq OWNED BY public.tickets.id;


--
-- TOC entry 207 (class 1259 OID 16783)
-- Name: tipos_status; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.tipos_status (
    id integer NOT NULL,
    tipo character varying(60),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.tipos_status OWNER TO "user";

--
-- TOC entry 206 (class 1259 OID 16781)
-- Name: tipos_status_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.tipos_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipos_status_id_seq OWNER TO "user";

--
-- TOC entry 2999 (class 0 OID 0)
-- Dependencies: 206
-- Name: tipos_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.tipos_status_id_seq OWNED BY public.tipos_status.id;


--
-- TOC entry 209 (class 1259 OID 16791)
-- Name: tipos_suporte; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.tipos_suporte (
    id integer NOT NULL,
    tipo character varying(60),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.tipos_suporte OWNER TO "user";

--
-- TOC entry 208 (class 1259 OID 16789)
-- Name: tipos_suporte_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.tipos_suporte_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipos_suporte_id_seq OWNER TO "user";

--
-- TOC entry 3000 (class 0 OID 0)
-- Dependencies: 208
-- Name: tipos_suporte_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.tipos_suporte_id_seq OWNED BY public.tipos_suporte.id;


--
-- TOC entry 203 (class 1259 OID 16758)
-- Name: tokens; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    user_id integer,
    token character varying(255) NOT NULL,
    type character varying(80) NOT NULL,
    is_revoked boolean DEFAULT false,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.tokens OWNER TO "user";

--
-- TOC entry 202 (class 1259 OID 16756)
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tokens_id_seq OWNER TO "user";

--
-- TOC entry 3001 (class 0 OID 0)
-- Dependencies: 202
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- TOC entry 201 (class 1259 OID 16741)
-- Name: users; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    email character varying(254) NOT NULL,
    password character varying(60) NOT NULL,
    perfil_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO "user";

--
-- TOC entry 200 (class 1259 OID 16739)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO "user";

--
-- TOC entry 3002 (class 0 OID 0)
-- Dependencies: 200
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 2786 (class 2604 OID 16718)
-- Name: adonis_schema id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.adonis_schema ALTER COLUMN id SET DEFAULT nextval('public.adonis_schema_id_seq'::regclass);


--
-- TOC entry 2797 (class 2604 OID 16828)
-- Name: autorizacoes id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.autorizacoes ALTER COLUMN id SET DEFAULT nextval('public.autorizacoes_id_seq'::regclass);


--
-- TOC entry 2793 (class 2604 OID 16778)
-- Name: clientes id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.clientes ALTER COLUMN id SET DEFAULT nextval('public.clientes_id_seq'::regclass);


--
-- TOC entry 2798 (class 2604 OID 16836)
-- Name: perfil_autorizacoes id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.perfil_autorizacoes ALTER COLUMN id SET DEFAULT nextval('public.perfil_autorizacoes_id_seq'::regclass);


--
-- TOC entry 2788 (class 2604 OID 16735)
-- Name: perfis id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.perfis ALTER COLUMN id SET DEFAULT nextval('public.perfis_id_seq'::regclass);


--
-- TOC entry 2800 (class 2604 OID 16855)
-- Name: status id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);


--
-- TOC entry 2796 (class 2604 OID 16802)
-- Name: tickets id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tickets ALTER COLUMN id SET DEFAULT nextval('public.tickets_id_seq'::regclass);


--
-- TOC entry 2794 (class 2604 OID 16786)
-- Name: tipos_status id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tipos_status ALTER COLUMN id SET DEFAULT nextval('public.tipos_status_id_seq'::regclass);


--
-- TOC entry 2795 (class 2604 OID 16794)
-- Name: tipos_suporte id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tipos_suporte ALTER COLUMN id SET DEFAULT nextval('public.tipos_suporte_id_seq'::regclass);


--
-- TOC entry 2791 (class 2604 OID 16761)
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- TOC entry 2790 (class 2604 OID 16744)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 2963 (class 0 OID 16715)
-- Dependencies: 197
-- Data for Name: adonis_schema; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.adonis_schema VALUES (1, '1503250034278_perfil_schema', 1, '2019-10-06 13:08:22.712133+00');
INSERT INTO public.adonis_schema VALUES (2, '1503250034279_user', 1, '2019-10-06 13:08:22.883395+00');
INSERT INTO public.adonis_schema VALUES (3, '1503250034280_token', 1, '2019-10-06 13:08:22.981279+00');
INSERT INTO public.adonis_schema VALUES (4, '1570310310830_cliente_schema', 1, '2019-10-06 13:08:22.999477+00');
INSERT INTO public.adonis_schema VALUES (5, '1570310310831_tipos_status_schema', 1, '2019-10-06 13:08:23.042887+00');
INSERT INTO public.adonis_schema VALUES (6, '1570310310832_tipos_suporte_schema', 1, '2019-10-06 13:08:23.060415+00');
INSERT INTO public.adonis_schema VALUES (7, '1570310318848_ticket_schema', 1, '2019-10-06 13:08:23.089925+00');
INSERT INTO public.adonis_schema VALUES (8, '1570310405002_autorizacao_schema', 1, '2019-10-06 13:08:23.099192+00');
INSERT INTO public.adonis_schema VALUES (9, '1570310421748_perfil_autorizacao_schema', 1, '2019-10-06 13:08:23.116723+00');
INSERT INTO public.adonis_schema VALUES (10, '1570364911801_status_schema', 1, '2019-10-06 13:08:23.137711+00');


--
-- TOC entry 2979 (class 0 OID 16825)
-- Dependencies: 213
-- Data for Name: autorizacoes; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.autorizacoes VALUES (2, 'cliente', '/cliente', 'Clientes', '2019-10-06 16:08:23+00', '2019-10-06 19:08:57+00', NULL, 'GET', 'ClienteController', 'index');


--
-- TOC entry 2971 (class 0 OID 16775)
-- Dependencies: 205
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.clientes VALUES (3, 'Juliano', 'juliano.carneiro@mail.com', '98765432', '2019-10-06 14:04:16+00', '2019-10-06 14:04:16+00');
INSERT INTO public.clientes VALUES (2, 'Anna Julia', 'annajulia.carneiro@mail.com', '98765432', '2019-10-06 11:03:55+00', '2019-10-06 14:06:31+00');


--
-- TOC entry 2981 (class 0 OID 16833)
-- Dependencies: 215
-- Data for Name: perfil_autorizacoes; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.perfil_autorizacoes VALUES (1, 4, 2, true, '2019-10-06 19:11:48+00', '2019-10-06 19:11:48+00');
INSERT INTO public.perfil_autorizacoes VALUES (2, 4, 2, true, '2019-10-06 19:12:46+00', '2019-10-06 19:12:46+00');


--
-- TOC entry 2965 (class 0 OID 16732)
-- Dependencies: 199
-- Data for Name: perfis; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.perfis VALUES (1, 'Atendente', false, '2019-10-06 14:12:30+00', '2019-10-06 14:12:30+00');
INSERT INTO public.perfis VALUES (3, 'Programador', true, '2019-10-06 14:13:25+00', '2019-10-06 14:13:25+00');
INSERT INTO public.perfis VALUES (4, 'Admin', false, '2019-10-06 14:13:35+00', '2019-10-06 14:13:35+00');
INSERT INTO public.perfis VALUES (2, 'Suporte', true, '2019-10-06 08:13:17+00', '2019-10-06 14:15:38+00');
INSERT INTO public.perfis VALUES (6, NULL, false, '2019-10-06 14:26:05+00', '2019-10-06 14:26:05+00');


--
-- TOC entry 2983 (class 0 OID 16852)
-- Dependencies: 217
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.status VALUES (2, '2019-10-06 10:30:00+00', 1, '2019-10-06 14:00:00+00', 2, 2, 2, '2019-10-06 11:59:36+00', '2019-10-06 15:00:26+00');


--
-- TOC entry 2977 (class 0 OID 16799)
-- Dependencies: 211
-- Data for Name: tickets; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.tickets VALUES (1, NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-06 14:35:30+00', '2019-10-06 14:35:30+00');
INSERT INTO public.tickets VALUES (2, NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-06 14:36:56+00', '2019-10-06 14:36:56+00');
INSERT INTO public.tickets VALUES (4, 'Não Abre a tela de login', 'Reinicie a aplicação', NULL, 1, 2, 2, '2019-10-06 11:40:42+00', '2019-10-06 14:41:41+00');


--
-- TOC entry 2973 (class 0 OID 16783)
-- Dependencies: 207
-- Data for Name: tipos_status; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.tipos_status VALUES (1, 'Novo', '2019-10-06 13:51:35+00', '2019-10-06 13:51:35+00');
INSERT INTO public.tipos_status VALUES (2, 'Executando', '2019-10-06 13:51:43+00', '2019-10-06 13:51:43+00');
INSERT INTO public.tipos_status VALUES (3, 'Pendente', '2019-10-06 13:51:51+00', '2019-10-06 13:51:51+00');
INSERT INTO public.tipos_status VALUES (4, 'Concluido', '2019-10-06 13:52:01+00', '2019-10-06 13:52:01+00');


--
-- TOC entry 2975 (class 0 OID 16791)
-- Dependencies: 209
-- Data for Name: tipos_suporte; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.tipos_suporte VALUES (2, 'Implementação', '2019-10-06 11:07:48+00', '2019-10-06 11:07:48+00');
INSERT INTO public.tipos_suporte VALUES (1, 'Suporte', '2019-10-06 05:07:37+00', '2019-10-06 11:13:05+00');


--
-- TOC entry 2969 (class 0 OID 16758)
-- Dependencies: 203
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: user
--



--
-- TOC entry 2967 (class 0 OID 16741)
-- Dependencies: 201
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: user
--

INSERT INTO public.users VALUES (1, 'juliano', 'juliano.carneiro@ubersystem.com.br', '$2a$10$i8VvYw8PzVjzsVm49a6Dt.LL82GzGhx.3QeFuR2SPb8InCet2aJ42', NULL, '2019-10-06 10:57:22+00', '2019-10-06 10:57:22+00');
INSERT INTO public.users VALUES (2, 'Luciana', 'luciana@mail.com.br', '$2a$10$8GrG1C5fgsqQhZ23yvgHTe5bqZZ9axBZXDJNRSrs3wOO21AIGXcNK', 2, '2019-10-06 11:28:06+00', '2019-10-06 14:28:45+00');


--
-- TOC entry 3003 (class 0 OID 0)
-- Dependencies: 196
-- Name: adonis_schema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.adonis_schema_id_seq', 10, true);


--
-- TOC entry 3004 (class 0 OID 0)
-- Dependencies: 212
-- Name: autorizacoes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.autorizacoes_id_seq', 2, true);


--
-- TOC entry 3005 (class 0 OID 0)
-- Dependencies: 204
-- Name: clientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.clientes_id_seq', 3, true);


--
-- TOC entry 3006 (class 0 OID 0)
-- Dependencies: 214
-- Name: perfil_autorizacoes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.perfil_autorizacoes_id_seq', 3, true);


--
-- TOC entry 3007 (class 0 OID 0)
-- Dependencies: 198
-- Name: perfis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.perfis_id_seq', 6, true);


--
-- TOC entry 3008 (class 0 OID 0)
-- Dependencies: 216
-- Name: status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.status_id_seq', 2, true);


--
-- TOC entry 3009 (class 0 OID 0)
-- Dependencies: 210
-- Name: tickets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.tickets_id_seq', 5, true);


--
-- TOC entry 3010 (class 0 OID 0)
-- Dependencies: 206
-- Name: tipos_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.tipos_status_id_seq', 4, true);


--
-- TOC entry 3011 (class 0 OID 0)
-- Dependencies: 208
-- Name: tipos_suporte_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.tipos_suporte_id_seq', 3, true);


--
-- TOC entry 3012 (class 0 OID 0)
-- Dependencies: 202
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.tokens_id_seq', 1, false);


--
-- TOC entry 3013 (class 0 OID 0)
-- Dependencies: 200
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- TOC entry 2802 (class 2606 OID 16721)
-- Name: adonis_schema adonis_schema_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.adonis_schema
    ADD CONSTRAINT adonis_schema_pkey PRIMARY KEY (id);


--
-- TOC entry 2825 (class 2606 OID 16830)
-- Name: autorizacoes autorizacoes_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.autorizacoes
    ADD CONSTRAINT autorizacoes_pkey PRIMARY KEY (id);


--
-- TOC entry 2817 (class 2606 OID 16780)
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id);


--
-- TOC entry 2827 (class 2606 OID 16839)
-- Name: perfil_autorizacoes perfil_autorizacoes_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.perfil_autorizacoes
    ADD CONSTRAINT perfil_autorizacoes_pkey PRIMARY KEY (id);


--
-- TOC entry 2804 (class 2606 OID 16738)
-- Name: perfis perfis_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.perfis
    ADD CONSTRAINT perfis_pkey PRIMARY KEY (id);


--
-- TOC entry 2829 (class 2606 OID 16857)
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);


--
-- TOC entry 2823 (class 2606 OID 16807)
-- Name: tickets tickets_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);


--
-- TOC entry 2819 (class 2606 OID 16788)
-- Name: tipos_status tipos_status_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tipos_status
    ADD CONSTRAINT tipos_status_pkey PRIMARY KEY (id);


--
-- TOC entry 2821 (class 2606 OID 16796)
-- Name: tipos_suporte tipos_suporte_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tipos_suporte
    ADD CONSTRAINT tipos_suporte_pkey PRIMARY KEY (id);


--
-- TOC entry 2812 (class 2606 OID 16764)
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- TOC entry 2815 (class 2606 OID 16771)
-- Name: tokens tokens_token_unique; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_token_unique UNIQUE (token);


--
-- TOC entry 2806 (class 2606 OID 16750)
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- TOC entry 2808 (class 2606 OID 16746)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2810 (class 2606 OID 16748)
-- Name: users users_username_unique; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_unique UNIQUE (username);


--
-- TOC entry 2813 (class 1259 OID 16772)
-- Name: tokens_token_index; Type: INDEX; Schema: public; Owner: user
--

CREATE INDEX tokens_token_index ON public.tokens USING btree (token);


--
-- TOC entry 2836 (class 2606 OID 16845)
-- Name: perfil_autorizacoes perfil_autorizacoes_autorizacao_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.perfil_autorizacoes
    ADD CONSTRAINT perfil_autorizacoes_autorizacao_id_foreign FOREIGN KEY (autorizacao_id) REFERENCES public.autorizacoes(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2835 (class 2606 OID 16840)
-- Name: perfil_autorizacoes perfil_autorizacoes_perfil_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.perfil_autorizacoes
    ADD CONSTRAINT perfil_autorizacoes_perfil_id_foreign FOREIGN KEY (perfil_id) REFERENCES public.perfis(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2840 (class 2606 OID 16873)
-- Name: status status_alterado_por_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_alterado_por_id_foreign FOREIGN KEY (alterado_por_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2838 (class 2606 OID 16863)
-- Name: status status_status_final_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_status_final_id_foreign FOREIGN KEY (status_final_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2837 (class 2606 OID 16858)
-- Name: status status_status_inicial_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_status_inicial_id_foreign FOREIGN KEY (status_inicial_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2839 (class 2606 OID 16868)
-- Name: status status_tecnico_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_tecnico_id_foreign FOREIGN KEY (tecnico_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2833 (class 2606 OID 16813)
-- Name: tickets tickets_cliente_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_cliente_id_foreign FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2832 (class 2606 OID 16808)
-- Name: tickets tickets_tecnico_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_tecnico_id_foreign FOREIGN KEY (tecnico_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2834 (class 2606 OID 16818)
-- Name: tickets tickets_tipos_suporte_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_tipos_suporte_id_foreign FOREIGN KEY (tipos_suporte_id) REFERENCES public.tipos_suporte(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2831 (class 2606 OID 16765)
-- Name: tokens tokens_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 2830 (class 2606 OID 16751)
-- Name: users users_perfil_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_perfil_id_foreign FOREIGN KEY (perfil_id) REFERENCES public.perfis(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2019-10-06 19:37:09 -03

--
-- PostgreSQL database dump complete
--

