/*angular core modules start*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/*angular core modules end*/
/*application realted services,interfaces,enviroment import start*/
import { DataServiceService } from '../../shared/data-service.service';
import { IHospitals } from '../../models/hospitals';
import { environment } from '../../../environments/environment';
/*application realted services,interfaces,enviroment import end*/

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.css']
})
/**
 * ClaimFormComponent is used for to verify a claim and submit a claim 
*/
export class ClaimFormComponent implements OnInit {

  baseApiUrl: string;

  isPolicyVerified: boolean;
  isAlert: boolean;
  alertType: string;
  alertMsg: string;

  hospitals: IHospitals[];

  policyHolderName: string;
  policyNumber: number;
  policyDOB: string;
  policyAmount: number;

  date1: Date;
  date2: Date;

  claimForm: FormGroup;

  constructor(private _fb: FormBuilder, private dataServiceService: DataServiceService) {
    /*Assigned value to baseApiUrl*/
    this.baseApiUrl = environment.baseApiUrl;

    /*Assigned value to baseApiUrl*/
    this.isPolicyVerified = false;

    /*Assigned value for alert component parameters*/
    this.isAlert = false;
    this.alertType = '';
    this.alertMsg = '';

    /*Innitializing claimForm with Validators*/
    this.claimForm = this._fb.group({
      policyId: ['', Validators.required],
      hospitalName: ['', Validators.required],
      diagnosis: ['', Validators.required],
      ailment: ['', Validators.required],
      admissionDate: ['', Validators.required],
      dischargeDate: ['', Validators.required],
      requestedClaimAmount: ['', Validators.required],
      document: [''],
      claimDate: [new Date],
      status: ['Pending L1'],
      comments: ['']
    });

  }

  ngOnInit() {
    this.initGetHospitals();
  }

  /**
   * initGetHospitals is used get all Hospitals from server 
  */
  initGetHospitals = () => {
    let url = this.baseApiUrl + '/hospitals';
    this.dataServiceService.httpGetRequest(url).subscribe(hospitals => {
      if (hospitals != null && hospitals != undefined) {
        let val = JSON.parse(JSON.stringify(hospitals));
        if (val.statusCode == 200) {
          this.hospitals = val.listOfHospitals;
        }
      }
    });
  }

  /**
   * verifyPolicy is to verify the policy number is it is valid.
  */
  verifyPolicy = () => {
    let policyId = this.claimForm.get('policyId').value;
    if (policyId != '') {
      let url = this.baseApiUrl + '/policies/' + policyId;
      this.dataServiceService.httpGetRequest(url).subscribe(policy => {
        if (policy != null && policy != undefined) {
          let val = JSON.parse(JSON.stringify(policy));
          if (val.statusCode == 200) {
            this.policyHolderName = val.userName;
            this.policyNumber = val.policyId;
            this.policyDOB = val.dob;
            this.policyAmount = val.claimAmount;
            this.isAlert = false;
            this.isPolicyVerified = true;
          } else {
            this.isAlert = true;
            this.alertType = 'warning';
            this.alertMsg = val.message;
          }
        }
      });
    } else {
      this.isAlert = true;
      this.alertType = 'warning';
      this.alertMsg = 'Please enter valid Policy Number'
    }
  }

  /**
   * verifyPolicyAgain is to enable UI to check the Policy number again
  */
  verifyPolicyAgain = () => {
    this.isPolicyVerified = false;
  }

  /**
   * verifyPolicyAgain is to enable UI to check the Policy number again
   * @param {boolean} status - Claim status
   */
  onSubmit = (status: boolean) => {
    if (status) {
      let url = this.baseApiUrl + '/claim/claimPolicy';
      let claimObject = this.claimForm.value;
      this.dataServiceService.httpPostRequest(url, claimObject).subscribe(response => {
        if (response != null && response != undefined) {
          let val = JSON.parse(JSON.stringify(response));
          if (val.statusCode == 200) {
            this.isAlert = true;
            this.alertType = 'success';
            this.alertMsg = val.message;
          } else {
            this.isAlert = true;
            this.alertType = 'warning';
            this.alertMsg = val.message;
          }
        }
      });
    }
  }

  /**
   * getter for hospitalName field
   * @returns hospitalName Control
  */
  get hospitalName() {
    return this.claimForm.get('hospitalName');
  }

  /**
   * getter for diagnosis field
   * @returns diagnosis Control
  */
  get diagnosis() {
    return this.claimForm.get('diagnosis');
  }

  /**
   * getter for ailment field
   * @returns ailment Control
  */
  get ailment() {
    return this.claimForm.get('ailment');
  }

  /**
   * getter for admissionDate field
   * @returns admissionDate Control
  */
  get admissionDate() {
    return this.claimForm.get('admissionDate');
  }

  /**
   * getter for dischargeDate field
   * @returns dischargeDate Control
  */
  get dischargeDate() {
    return this.claimForm.get('dischargeDate');
  }

  /**
   * getter for requestedClaimAmount field
  */
  get requestedClaimAmount() {
    return this.claimForm.get('requestedClaimAmount');
  }

  /**
   * closeAlertBox() will call on closing of alert box
  */
  closeAlertBox() {
    this.isAlert = false;
  }

}
