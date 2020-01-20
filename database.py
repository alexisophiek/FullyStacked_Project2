import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func
from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import *
import requests
import csv
import psycopg2
from psycopg2 import Error
import pandas as pd


pguser = input('what is your Postgres username?')
pw = input('what is your postgres password?')
engine = create_engine(f'postgresql://{pguser}:{pw}@localhost:5432/USDA_Foods')
print('line 34')



#Defining a schema
class Main (Base):
        __tablename__ = 'main'
        FIPS = Column(Integer, primary_key = true)
        state= Column(String)
        county= Column(String)
        low_access_store_2010 =Column(Integer)
        LACCESS_POP15 = Column(Integer)
        PCH_LACCESS_POP_10_15_15 =Column(Integer)
        LACCE_POP10 =Column(Integer)
        LACCE_POP15 =Column(Integer)
        LACCESS_LOWI10 = Column(Integer)
        LACCESS_LOWI15 = Column(Integer)
        PCH_LACCESS_LOWI_10_15_15=Column(Integer)
        LACCE_LOWI10 =Column(Integer)
        LACCE_LOWI15 =Column(Integer)
        LACCESS_HHNV10= Column(Integer)
        LACCESS_HHNV15 = Column(Integer)
        PCH_LACCESS_HHNV_10_15_15 =Column(Integer)
        LACCE_HHNV10 =Column(Integer)
        LACCE_HHNV15 =Column(Integer)
        LACCESS_SNAP15 = Column(Integer)
        LACCE_SNAP15 =Column(Integer)
        LACCESS_CHILD10 = Column(Integer)
        LACCESS_CHILD15 = Column(Integer)
        LACCESS_CHILD_10_15_15 =Column(Integer)
        LACCE_CHILD10 =Column(Integer)
        LACCE_CHILD15 =Column(Integer)
        LACCESS_SENIORS10 = Column(Integer)
        LACCESS_SENIORS15 = Column(Integer)
        PCH_LACCESS_SENIORS_10_15_15 =Column(Integer)
        LACCE_SENIORS10 =Column(Integer)
        LACCE_SENIORS15 =Column(Integer)
        LACCESS_WHITE15 = Column(Integer)
        LACCE_WHITE15 =Column(Integer)
        LACCESS_BLACK15 = Column(Integer)
        LACCE_BLACK15 =Column(Integer)
        LACCESS_HISP15 = Column(Integer)
        LACCE_HISP15 =Column(Integer)
        LACCESS_NHASIAN15 = Column(Integer)
        LACCE_NHASIAN15 =Column(Integer)
        LACCESS_NHNA15 = Column(Integer)
        LACCE_NHNA15 =Column(Integer)
        LACCESS_NHPI15 = Column(Integer)
        LACCE_NHPI15 =Column(Integer)
        LACCESS_MULTIR15 = Column(Integer)
        LACCE_MULTIR15 =Column(Integer)
        REDEMP_SNAPS12 = Column(Integer)
        REDEMP_SNAPS16 = Column(Integer)
        PCH_REDEMP_SNAPS_12_16_16 =Column(Integer)
        PCT_SNAP12 = Column(Integer)
        PCT_SNAP16 = Column(Integer)
        PCH_SNAP_12_16_16 =Column(Integer)
        PC_SNAPBEN10 = Column(Integer)
        PC_SNAPBEN15 = Column(Integer)
        PCH_PC_SNAPBEN_10_15_15 =Column(Integer)
        PART__RATE08 =Column(Integer)
        PART__RATE13 =Column(Integer)
        SNAP_OAPP09 = Column(Integer)
        SNAP_OAPP16 = Column(Integer)
        SNAP_CAP09 = Column(Integer)
        SNAP_CAP16 = Column(Integer)
        SNAP_BBCE09 = Column(Integer)
        SNAP_BBCE16 = Column(Integer)
        SNAP_REPORTSIMPLE09 = Column(Integer)
        SNAP_REPORTSIMPLE16 = Column(Integer)
        PCT_NSLP09 = Column(Integer)
        PCT_NSLP15 = Column(Integer)
        PCH_NSLP_09_15_15 =Column(Integer)
        FREE__LUNCH09 =Column(Integer)
        FREE__LUNCH14 =Column(Integer)
        REDUC_LUNCH09 =Column(Integer)
        REDUC_LUNCH14 =Column(Integer)
        PCT_SBP09 = Column(Integer)
        PCT_SBP15 = Column(Integer)
        PCH_SBP_09_15_15 =Column(Integer)
        PCT_SFSP09 = Column(Integer)
        PCT_SFSP15 = Column(Integer)
        PCH_SFSP_09_15_15 =Column(Integer)
        WIC_R_REDEMP08 =Column(Integer)
        WIC_R_REDEMP12 =Column(Integer)
        PCH_PC_WIC_REDEMP_08_12_12 =Column(Integer)
        REDEMP_WICS08 = Column(Integer)
        REDEMP_WICS12 = Column(Integer)
        PCH_REDEMP_WICS_08_12_12 =Column(Integer)
        PCT_WIC09 = Column(Integer)
        PCT_WIC15 = Column(Integer)
        PCH_WIC_09_15_15 =Column(Integer)
        PCT_CACFP09 = Column(Integer)
        PCT_CACFP15 = Column(Integer)
        PCH_CACFP_09_15_15 =Column(Integer)
        FDPIR_12 =Column(Integer)
        DIABE_ADULTS08 =Column(Integer)
        DIABE_ADULTS13 =Column(Integer)
        OBESE_ADULTS08 =Column(Integer)
        OBESE_ADULTS13 =Column(Integer)
        PCT_HSPA15 = Column(Integer)
        RECFA_09 =Column(Integer)
        RECFA_14 =Column(Integer)
        PCH_RECFAC_09_14_14 =Column(Integer)
        RECFA_09 =Column(Integer)
        RECFA_14 =Column(Integer)
        PCH_RECFACPTH_09_14_14 =Column(Integer)
        FOODINSEC_10_12=Column(Integer)
        FOODINSEC_13_15 =Column(Integer)
        CH_FOODINSEC_12_15_15 =Column(Integer)
        VLFOODSEC_10_12 =Column(Integer)
        VLFOODSEC_13_15 =Column(Integer)
        CH_VLFOODSEC_12_15_15 =Column(Integer)
        FOODINSEC_CHILD_01_07_07 =Column(Integer)
        FOODINSEC_CHILD_03_11_11 =Column(Integer)
        DIRSALES_FARMS07 = Column(Integer)
        DIRSALES_FARMS12 = Column(Integer)
        PCH_DIRSALES_FARMS_07_12_12 =Column(Integer)
        PCT_LOCLFARM07 = Column(Integer)
        PCT_LOCLFARM12 = Column(Integer)
        PCT_LOCLSALE07 = Column(Integer)
        PCT_LOCLSALE12 = Column(Integer)
        DIRSA_07 =Column(Integer)
        DIRSA_12 =Column(Integer)
        PCH_DIRSALES_07_12_12 =Column(Integer)
        PC_DIRSALES07 = Column(Integer)
        PC_DIRSALES12 = Column(Integer)
        PCH_PC_DIRSALES_07_12_12 =Column(Integer)
        FMRKT_09 =Column(Integer)
        FMRKT_16 =Column(Integer)
        PCH_FMRKT_09_16_16 =Column(Integer)
        FMRKT_09 =Column(Integer)
        FMRKT_16 =Column(Integer)
        PCH_FMRKTPTH_09_16_16 =Column(Integer)
        FMRKT_SNAP16 = Column(Integer)
        FMRKT_SNAP16 =Column(Integer)
        FMRKT_WIC16 = Column(Integer)
        FMRKT_WIC16 =Column(Integer)
        FMRKT_WICCASH16 = Column(Integer)
        FMRKT_WICCASH16 =Column(Integer)
        FMRKT_SFMNP16 = Column(Integer)
        FMRKT_SFMNP16 =Column(Integer)
        FMRKT_CREDIT16 = Column(Integer)
        FMRKT_CREDIT16 =Column(Integer)
        FMRKT_FRVEG16 = Column(Integer)
        FMRKT_FRVEG16 =Column(Integer)
        FMRKT_ANMLPROD16 = Column(Integer)
        FMRKT_ANMLPROD16 =Column(Integer)
        FMRKT_BAKED16 = Column(Integer)
        FMRKT_BAKED16 =Column(Integer)
        FMRKT_OTHERFOOD16 = Column(Integer)
        FMRKT_OTHERFOOD16 =Column(Integer)
        VEG_FARMS07 = Column(Integer)
        VEG_FARMS12 = Column(Integer)
        PCH_VEG_FARMS_07_12_12 =Column(Integer)
        VEG_ACRES07 = Column(Integer)
        VEG_ACRES12 = Column(Integer)
        PCH_VEG_ACRES_07_12_12 =Column(Integer)
        VEG_ACRESPTH07 = Column(Integer)
        VEG_ACRESPTH12 = Column(Integer)
        PCH_VEG_ACRESPTH_07_12_12 =Column(Integer)
        FRESHVEG_FARMS07 = Column(Integer)
        FRESHVEG_FARMS12 = Column(Integer)
        PCH_FRESHVEG_FARMS_07_12_12 =Column(Integer)
        FRESHVEG_ACRES07 = Column(Integer)
        FRESHVEG_ACRES12 = Column(Integer)
        PCH_FRESHVEG_ACRES_07_12_12 =Column(Integer)
        FRESHVEG_ACRESPTH07 = Column(Integer)
        FRESHVEG_ACRESPTH12 = Column(Integer)
        PCH_FRESHVEG_ACRESPTH_07_12_12 =Column(Integer)
        ORCHARD_FARMS07 = Column(Integer)
        ORCHARD_FARMS12 = Column(Integer)
        PCH_ORCHARD_FARMS_07_12_12 =Column(Integer)
        ORCHARD_ACRES07 = Column(Integer)
        ORCHARD_ACRES12 = Column(Integer)
        PCH_ORCHARD_ACRES_07_12_12 =Column(Integer)
        ORCHARD_ACRESPTH07 = Column(Integer)
        ORCHARD_ACRESPTH12 = Column(Integer)
        PCH_ORCHARD_ACRESPTH_07_12_12 =Column(Integer)
        BERRY_FARMS07 = Column(Integer)
        BERRY_FARMS12 = Column(Integer)
        PCH_BERRY_FARMS_07_12_12 =Column(Integer)
        BERRY_ACRES07 = Column(Integer)
        BERRY_ACRES12 = Column(Integer)
        PCH_BERRY_ACRES_07_12_12 =Column(Integer)
        BERRY_ACRESPTH07 = Column(Integer)
        BERRY_ACRESPTH12 = Column(Integer)
        PCH_BERRY_ACRESPTH_07_12_12 =Column(Integer)
        SLHOU_07 =Column(Integer)
        SLHOU_12 =Column(Integer)
        PCH_SLHOUSE_07_12_12 =Column(Integer)
        GHVEG_FARMS07 = Column(Integer)
        GHVEG_FARMS12 = Column(Integer)
        PCH_GHVEG_FARMS_07_12_12 =Column(Integer)
        GHVEG_SQFT07 = Column(Integer)
        GHVEG_SQFT12 = Column(Integer)
        PCH_GHVEG_SQFT_07_12_12 =Column(Integer)
        GHVEG_SQFTPTH07 = Column(Integer)
        GHVEG_SQFTPTH12 = Column(Integer)
        PCH_GHVEG_SQFTPTH_07_12_12 =Column(Integer)
        FOODH_16 =Column(Integer)
        CSA07_07 =Column(Integer)
        CSA12_12 =Column(Integer)
        PCH_CSA_07_12_12 =Column(Integer)
        AGRITRSM_OPS07 = Column(Integer)
        AGRITRSM_OPS12 = Column(Integer)
        PCH_AGRITRSM_OPS_07_12_12 =Column(Integer)
        AGRITRSM_RCT07 = Column(Integer)
        AGRITRSM_RCT12 = Column(Integer)
        PCH_AGRITRSM_RCT_07_12_12 =Column(Integer)
        TO_SC_SCHOOL09 =Column(Integer)
        TO_SC_SCHOOL13 =Column(Integer)
        MILK_PRICE10 = Column(Integer)
        SODA_PRICE10 = Column(Integer)
        SODA__PRICE10 =Column(Integer)
        SODATAX_STORES14 = Column(Integer)
        SODATAX_VENDM14 = Column(Integer)
        CHIPSTAX_STORES14 = Column(Integer)
        CHIPSTAX_VENDM14 = Column(Integer)
        FOOD_TAX14 = Column(Integer)
        FFR09_09 =Column(Integer)
        FFR14_14 =Column(Integer)
        PCH_FFR_09_14_14 =Column(Integer)
        FFRPT_09 =Column(Integer)
        FFRPT_14 =Column(Integer)
        PCH_FFRPTH_09_14_14 =Column(Integer)
        FSR09_09 =Column(Integer)
        FSR14_14 =Column(Integer)
        PCH_FSR_09_14_14 =Column(Integer)
        FSRPT_09 =Column(Integer)
        FSRPT_14 =Column(Integer)
        PCH_FSRPTH_09_14_14 =Column(Integer)
        PC_FFRSALES07 = Column(Integer)
        PC_FFRSALES12 = Column(Integer)
        PC_FSRSALES07 = Column(Integer)
        PC_FSRSALES12 = Column(Integer)
        PCT_NHWHITE10 = Column(Integer)
        PCT_NHBLACK10 = Column(Integer)
        PCT_HISP10 = Column(Integer)
        PCT_NHASIAN10 = Column(Integer)
        PCT_NHNA10 = Column(Integer)
        PCT_NHPI10 = Column(Integer)
        PCT_65OLDER10 = Column(Integer)
        PCT_18YOUNGER10 = Column(Integer)
        MEDHH_15 =Column(Integer)
        POVRA_15 =Column(Integer)
        PERPO_10 =Column(Integer)
        CHILD_15 =Column(Integer)
        PERCH_10 =Column(Integer)
        METRO_13 =Column(Integer)
        POPLO_10 =Column(Integer)
        State_State =Column(Integer)
        Count_County =Column(Integer)
        GROC0_09 =Column(Integer)
        GROC1_14 =Column(Integer)
        PCH_GROC_09_14_14 =Column(Integer)
        GROCP_09 =Column(Integer)
        GROCP_14 =Column(Integer)
        PCH_GROCPTH_09_14_14 =Column(Integer)
        SUPER_09 =Column(Integer)
        SUPER_14 =Column(Integer)
        PCH_SUPERC_09_14_14 =Column(Integer)
        SUPER_09 =Column(Integer)
        SUPER_14 =Column(Integer)
        PCH_SUPERCPTH_09_14_14 =Column(Integer)
        CONVS_09 =Column(Integer)
        CONVS_14 =Column(Integer)
        PCH_CONVS_09_14_14 =Column(Integer)
        CONVS_09 =Column(Integer)
        CONVS_14 =Column(Integer)
        PCH_CONVSPTH_09_14_14 =Column(Integer)
        SPECS_09 =Column(Integer)
        SPECS_14 =Column(Integer)
        PCH_SPECS_09_14_14 =Column(Integer)
        SPECS_09 =Column(Integer)
        SPECS_14 =Column(Integer)
        PCH_SPECSPTH_09_14_14 =Column(Integer)
        SNAPS_12 =Column(Integer)
        SNAPS_16 =Column(Integer)
        PCH_SNAPS_12_16_16 =Column(Integer)
        SNAPS_12 =Column(Integer)
        SNAPS_16 =Column(Integer)
        PCH_SNAPSPTH_12_16_16 =Column(Integer)
        WICS0_08 =Column(Integer)
        WICS1_12 =Column(Integer)
        PCH_WICS_08_12_12 =Column(Integer)
        WICSP_08 =Column(Integer)
        WICSP_12 =Column(Integer)
        PCH_WICSPTH_08_12_12 =Column(Integer)

Base = declarative_base()

Main.__table__.create(bind=engine, checkfirst=True)

Base.metadata.create_all(engine)

def recreate_database():
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)


Session = sessionmaker(bind=engine)

f_contents = open('data\CSV_Files\combined.csv', 'r')


with f_contents as file:
    data_df = pd.read_csv(file)
data_df.to_sql('main', con=engine, index=True, index_label='id', if_exists='replace')
