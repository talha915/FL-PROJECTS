import React, { useState, useEffect } from 'react';
import {
    Button, Row, Col
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settings } from '../../actions/settings';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_terms } from '../../constants/constants';

// Styles
import '../../styles/settings.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Terms(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_terms));
    }

    const getSettings = useSelector(state => state.settings);
    const getTermsCondition = useSelector(state => state.getApi);

    const getTerms = () => {
        if (getTermsCondition.hasOwnProperty('pagesData')) {
            let termsCondition = getTermsCondition.pagesData.terms;
            return (
                <div className="terms">
                    <div className="settings-container">
                        <h5 className="settings-heading">
                            <i className="icon-portable-document-format"></i>
                            {termsCondition.title}
                        </h5>
                        <p>
                            {/* {termsCondition.content} */}
                            <p>
                                GENERAL TERMS OF USE
                            </p>
                            <p>
                                Last Updated: June 1, 2021
                            </p>
                            <p>
                                BY VISITING OUR WEBSITE, CREATING AN ACCOUNT, OR USING THE PLATFORM,  YOU AGREE TO THESE GENERAL TERMS OF USE – PLEASE READ THEM CAREFULLY. THESE GENERAL TERMS OF USE GOVERN YOUR USE OF TUNNIN AND CONSTITUTES YOUR AGREEMENT WITH US.
                            </p>
                            <h2>
                                Definitions:
                            </h2>
                            <p>
                                - we refer to our website as "Tunnin" or the “Platform”, including when accessed via the URL www.tunnin.io, the iOS application, or via any web browser or mobile phone;
                            </p>
                            <p>
                                - references to "we", "our", "us" are references to Tunnin, Inc., the operator of Tunnin;
                            </p>
                            <p>
                                - "Content" means any material uploaded to Tunnin by any User (whether a Trainer or a Customer), including any photos, videos, audio, livestream material, data, text, metadata, images, interactive features, emojis, GIFs, memes, and any other material whatsoever;
                            </p>  
                            <p>
                                - "Trainer" means a User who has set up their Tunnin account as a Trainer account to post Content on Tunnin to be viewed by other Users;
                            </p>
                            <p>
                                - "Customer" means a User who chooses to view the Trainer's Content;
                            </p>
                            <p>
                                - "Payment" means any and all payments made by a Customer to a Trainer, including payments for access to a Trainer's Content;
                            </p>
                            <p>
                                - "Platform " means a User who participates in the Tunnin Referral Program;
                            </p>
                            <p>
                                - "General Terms of Use" (also called "your agreement with us") means the legally binding agreement between you and us which consists of: (i) these General Terms of Use, (ii) Terms of Use for Customers, (iii) Terms of Use for Trainers, and (iv) Privacy Policy.
                            </p>
                            <p>
                                - "User" means any user of Tunnin, whether a Trainer or a Customer or both (also referred to as "you" or "your").
                            </p>
                            Changes to the Terms of Use: We may change any part of the General Terms of Use without telling you beforehand in the following circumstances:
                            to reflect changes in laws and regulatory requirements which apply to Tunnin and the services, features and programs of Tunnin where such changes require Tunnin to change its terms and conditions in a manner which does not allow us to give reasonable notice to you; and
                            to address an unforeseen and imminent danger related to defending Tunnin, Customers or Trainers from fraud, malware, spam, data breaches or other cybersecurity risks.

                            We may also make other changes to any part of the General Terms of Use, and we will give you reasonable notice of such changes by email or through Tunnin, and you may contact us to end your agreement with us before the changes take effect. Once any updated General Terms of Use are in effect, you will be bound by them if you continue to use Tunnin.

                            Changes to Service: We may update and change Tunnin from time to time for any reason, including to reflect changes to our services, Users' needs and our business practices or to improve performance, enhance functionality or address security issues. We will try to give you reasonable notice of any major changes. We do not guarantee that Tunnin, or any Content on it, will always be available or accessible without interruption. We may suspend or withdraw or restrict the availability of all or any part of Tunnin for business or operational reasons. We will try to give you reasonable notice of any suspension or withdrawal if it affects you.

                            Registering with Tunnin: To use Tunnin you must first register and create a User account on Tunnin. You must provide a valid email address, a username, and a password or authenticate using a valid Facebook, Apple or Google account. Your password should be unique (meaning that it is different to those you use for other websites) and must comply with the technical requirements of the Tunnin site for the composition of passwords. To register as a User:
                            you must be at least 18 years old, and you may be required to confirm this; and
                            if the laws of the country or State/Province where you live provide that you can only be legally bound by a contract with us at an age which is higher than 18 years old, then you must be old enough to be legally bound by a contract with us under the laws of the State/province where you live.

                            If you do not meet the above requirements, you must not access or use Tunnin.

                            User Responsibilities: When you register with and use Tunnin, you make the following commitments to us:
                            If you previously had an account with Tunnin, you confirm that your old account was not terminated or suspended by us because you violated any of our terms or policies.
                            You will make sure that all information which you submit to us is truthful, accurate and complete.
                            You will update promptly any of your information you have submitted to us as and when it changes.
                            You consent to receiving communications from us electronically, including by emails and messages posted to your Tunnin account, and to the processing of your personal data as more fully detailed in our Privacy Policy.
                            You will keep your account/login details confidential and secure, including your user details, passwords and any other piece of information that forms part of our security procedures, and you will not disclose these to anyone else. You will contact admin@tunnin.io promptly if you believe someone has used or is using your account without your permission or if your account has been subject to any other breach of security.
                            You are responsible for all activity on your account even if, contrary to the General Terms of Use, someone else uses your account.
                            You will comply in full with these General Terms of Use

                            Suspension of Services:
                            We can but we are not obligated to moderate or review any of your Content to verify compliance with the General Terms of Use and/or any applicable law.
                            It is our policy to suspend access to any Content you post on Tunnin which we become aware may not comply with the General Terms of Use and/or any applicable law whilst we investigate the suspected non-compliance or unlawfulness of such Content. Following our investigation of the suspected non-compliance or unlawfulness of the relevant Content, we may take any action we consider appropriate, including to reinstate access to the Content or to permanently remove or disable access to the relevant Content without needing to obtain any consent from you and without giving you prior notice. We will not be responsible for any loss suffered by you arising from the suspension of access to your Content or any other steps which we take in good faith to investigate any suspected non-compliance or unlawfulness of your Content under this section.
                            If we suspend access to or delete any of your Content, we will notify you via email or electronic message to your Tunnin account, but we are not obligated to give you prior notice of such removal.
                            We reserve the right in our sole discretion to terminate your agreement with us and your access to Tunnin for any reason by giving you 10 days’ notice by email or electronic message to your Tunnin account. We can also suspend access to your User account or terminate your agreement with us and your access to Tunnin immediately and without prior notice:
                            if we think that you have or may have seriously or repeatedly breached any part of the General Terms of Use, or if you attempt or threaten to breach any part of the General Terms of Use in a way which has or could have serious consequences for us or another User; or
                            if you take any action that in our opinion has caused or is reasonably likely to cause us to suffer a loss or that otherwise harms the reputation of Tunnin.

                            Tunnin Responsibilities: We will use reasonable care and skill in providing Tunnin to you, but there are certain things which we are not responsible for, as follows:
                            We do not authorize or approve Content on Tunnin, and views expressed by Trainers or Customers on Tunnin do not necessarily represent our views.
                            We do not grant you any rights in relation to Content. Any such rights may only be granted to you by Trainers.
                            All Content is created, selected and provided by Users and not by us. We are not responsible for reviewing or moderating Content, and we do not select or modify the Content that is stored or transmitted via Tunnin. We are under no obligation to monitor Content or to detect breaches of the General Terms of Use.
                            We make no promises or guarantees of any kind that Trainers will make a particular sum of money (or any money) from their use of Tunnin.
                            The materials which we make accessible on Tunnin for Users are for general information only. We make no promises or guarantees about the accuracy or otherwise of such materials, or that Users will achieve any particular result or outcome from using such materials.
                            We do not promise that Tunnin is compatible with all devices and operating systems. You are responsible for configuring your information technology, device, and computer programs to access Tunnin. You should use your own virus protection software.
                            We are not responsible for the availability of the internet, or any errors in your connections, device or other equipment, or software that may occur in relation to your use of Tunnin.
                            While we try to make sure that Tunnin is secure and free from bugs and viruses, we cannot promise that it will be and have no control over the Content that is supplied by Trainers.
                            We are not responsible for any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorized activities or resulting unauthorized payments or withdrawals of funds.

                            Intellectual Property Rights:
                            You confirm that you own all intellectual property rights (examples of which are copyright and trademarks) in your Content or that you have obtained all necessary rights to your Content which are required to grant licenses in respect of your Content to us and to other Users.
                            You agree to grant us a license under all your Content to perform any act restricted by any intellectual property right (including copyright) in such Content, for any purpose reasonably related to the provision and operation of Tunnin.
                            The license which you grant to us under sub-section 10(b) above is perpetual, non-exclusive, worldwide, royalty-free, sublicensable, assignable and transferable by us. This means that the license will continue even after your agreement with us ends and you stop using Tunnin, that we do not have to pay you for the license, and that we can grant a sub-license of your Content to someone else or assign or transfer the license to someone else. This license will allow us, for example, to add stickers, text, and watermarks to your Content, to make your Content available to other Users of Tunnin, as well as to use your Content for other normal operations of Tunnin.

                            Liability: We won't be liable to you for any:
                            loss of profits;
                            loss of sales, business, or revenue;
                            business interruption;
                            loss of anticipated savings;
                            loss of business opportunity, goodwill or reputation;
                            loss of data or information, including any Content; or
                            indirect or consequential loss or damage;

                            We won't be liable to you for any loss or damage caused by a distributed virus, ransomware, or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of Tunnin or any of its services, features or programs, or due to your downloading of any material posted on it, or on any website linked to it. We won't be liable to you if your Content is copied, distributed, reposted elsewhere or its copyright is infringed by another User or any third party. Our total liability to you for any and all claims arising out of or related to your agreement with us, whether in contract, tort (including negligence), breach of statutory duty, or otherwise shall be limited to USD 5,000.

                            General: You agree that:
                            If any aspect of your agreement with us is unenforceable, the rest will remain in effect.
                            If we fail to enforce any aspect of your agreement with us, it will not be a waiver;
                            We reserve all rights not expressly granted to you.
                            No implied licenses or other rights are granted to you in relation to any part of Tunnin, save as expressly set out in the General Terms of Use.
                            You cannot transfer your rights or obligations under your agreement with us without our prior written consent.
                            Our rights and obligations under your agreement with us can be assigned or transferred by us to others. For example, this could occur if our ownership changes (as in a merger, acquisition, or sale of assets) or by law. In addition, we may choose to delegate performance of any of our obligations under your agreement with us to any third party, but we will remain responsible to you for the performance of such obligations.
                            The General Terms of Use form the entire agreement between us and you regarding your access to and use of Tunnin, and supersede any and all prior oral or written understandings or agreements between us and you.



                            TERMS OF USE FOR CUSTOMERS

                            Last Updated: June 1, 2021

                            BY USING OUR WEBSITE AS A CUSTOMER YOU AGREE TO THESE TERMS OF USE FOR CUSTOMERS – PLEASE READ THEM CAREFULLY.

                            Application: These Terms of Use for Customers are in addition to the General Terms of Use and apply if you use Tunnin as a Customer (also referred to as "you" and "your" in these Terms of Use for Customers). These Terms of Use for Customers form part of your agreement with us. Capitalize terms used herein and not defined have the meaning ascribed to them in the General Terms of Use.

                            Customer Responsibilities: You warrant that:
                            you are at least 18 years old; and
                            if the laws of the country or State/Province where you live provide that you can only be legally bound by a contract with us at an age which is higher than 18 years old, then you are old enough to be legally bound by a contract with us under the laws of the country or State/province where you live.

                            Content: In addition to the terms set out elsewhere in the General Terms of Use, the following terms apply to the Content posted, displayed, uploaded or published by you as a Customer on Tunnin:
                            You warrant that for each item of Content which you post, display, upload or publish on Tunnin:
                            the Content complies in full with the General Terms of Use;
                            you either own your Content (and all intellectual property rights in it) or have a valid license to your Content; and
                            if your Content includes or uses any third-party material, you have secured all rights, licenses, written consents and releases that are necessary for the use of such third-party property in your Content and for the subsequent use and exploitation of that Content on Tunnin.
                            You agree that you will be liable to us and indemnify us if any of the warranties at section 3(a) is untrue. This means you will be responsible for any loss or damage we suffer as a result of any warranty being untrue.
                            We are not responsible for and do not endorse any aspect of any Content posted by you or any other User of Tunnin. We do not have any obligation to monitor any Content and have no direct control over what your Content may comprise.

                            Purchases: This section describes the terms which apply to transactions and interactions between Customers and Trainers:
                            All transactions and interactions facilitated by Tunnin are contracts between Customers and Trainers. Although we facilitate transactions and interactions between Customers and Trainers by providing the Tunnin Platform, storing Content, and acting as a payment intermediary, we are not a party to any other contract which may exist between a Customer and Trainer, and are not responsible for any transactions or interactions between Customers and Trainers.
                            Trainers are solely responsible for determining (within the parameters for pricing on Tunnin) the pricing applicable to transactions and interactions and the Content to which you may be given access. All prices appear in USD only.
                            You authorize us to supply your payment card details to a third-party payment provider for the purpose of processing your purchases. All payments will be charged in USD. Your payment card provider may charge you currency conversion fees. We do not have control over currency exchange rates or charges imposed by your payment card provider or bank and we are not responsible for paying any charges or fees imposed by your payment card provider or bank.

                            Refunds: TO BE UPDATED.

                            Cancellations: TO BE UPDATED. You are able to cancel a booked session up until one (1) hour prior to the start of the class with no charge. The fees you paid to book the session will be automatically refunded to your method of payment. If you miss a session that you booked, you will not be entitled to a refund and any fees paid will be forfeited.


                            TERMS OF USE FOR TRAINERS

                            Last Updated: June 1, 2021

                            BY USING OUR WEBSITE AS A TRAINER YOU AGREE TO THESE TERMS OF USE FOR TRAINERS – PLEASE READ THEM CAREFULLY.

                            Application: These Terms of Use for Trainers are in addition to the General Terms of Use and apply if you use Tunnin as a Trainer (also referred to as "you" and "your" in these Terms of Use for Trainers). These Terms of Use for Trainers form part of your agreement with us. Capitalize terms used herein and not defined have the meaning ascribed to them in the General Terms of Use.

                            Fees: We charge a fee to you of twenty-five per cent (25%) of all payments made to you by Customers (“Our Fee”). The remaining seventy-five per cent (75%) of the Customer payments (exclusive of other tax or service fees) is payable to you ("Trainer Earnings"). Our Fee includes our costs of providing, maintaining and operating Tunnin. Our Fee is deducted from the Customer payments, and Trainer Earnings are paid to you in the way described in the Payouts section below.

                            Trainer Account: To set up your account as a Trainer account:
                            You will need to create a User account on the Platform;
                            You will need to link your Stripe account with your User account in order to facilitate payment of Trainer Earnings.
                            We may ask you for additional age or identity verification information at any time. We may reject your application to set up a Trainer account for any reason.
                            You will then be able to start adding Content and Users will be able to book sessions that make available on your account.
                            If you lose access to your account, you can reset your password, but you will need to know the email address used to set up the account to do so. If you do not recall the email address used to set up the account, we may require you to provide identification documents and photos and any additional evidence we may reasonably require to prove your identity.
                            All transactions and interactions facilitated by Tunnin are contracts between Customers and Trainers. Although we facilitate transactions and interactions between Customers and Trainers by providing the Platform and acting as a payment intermediary, we are not a party to any other contract which may exist between a Customer and Trainer, and are not responsible for any transactions or interactions between Customers and Trainers.

                            Content: In addition to the terms set out elsewhere in the General Terms of Service, the following terms apply to the Content posted, displayed, uploaded or broadcasted by you as a Trainer on Tunnin:
                            Your Content is not confidential, and you authorize your Customers to access and view your Content on Tunnin for their own lawful and personal use.
                            You warrant (which means that you make a legally enforceable promise to us) that for each item of Content which you post, display, upload or publish on OnlyFans:
                            the Content complies in full with the General Terms of Use;
                            you hold all rights necessary to license and deal in your Content on OnlyFans, including in each territory where you have Fans and in the United Kingdom;
                            you either own your Content (and all intellectual property rights in it) or have a valid license to offer and supply your Content to your Fans;
                            if your Content includes or uses any third-party material, you have secured all rights, licenses, written consents and releases that are necessary for the use of such third-party property in your Content and for the subsequent use and exploitation of that Content on OnlyFans; and
                            the Content is:
                            of satisfactory quality, taking account of any description of the Content, the price, and all other relevant circumstances including any statement or representation which you make about the nature of the Content on your account or in any advertising; and
                            as described by you.

                            You agree that you will be liable to us and indemnify us if any of the warranties at section 4(c) is untrue. We are not responsible for and do not endorse any aspect of any Content posted by you or any other User of Tunnin. We do not have any obligation to monitor any Content and have no direct control over what your Content may comprise.

                            Payouts to Trainers: TO BE UPDATED.

                            Refunds: TO BE UPDTAED.

                            Cancellations: TO BE UPDATED. You are able to cancel a class that you are hosting up until one (1) hour prior to the start of the session with no charge (“Cut-Off Time”). If you cancel a class after the Cut-Off Time, you will be subject to a service fee of $50 USD that will be deducted from your Trainer Earnings. Customers that paid for the cancelled session will be automatically refunded.

                        </p>
                    </div>
                </div>
            );
        }
    }

    const getSettingSidebar = () => {
        return (
            <SettingSidebar />
        );
    }

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col>
                        <Row className="h-100">
                            <Col className="p-0 settings-sidebar-wrapper">
                                {getSettingSidebar()}
                            </Col>
                            <Col sm="9">
                                {getTerms()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Terms);